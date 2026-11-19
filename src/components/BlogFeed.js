"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { articleHref, formatDate } from "@/lib/blog.mjs";
import styles from "./Blog.module.css";

export default function BlogFeed({ compact = false }) {
  const [state, setState] = useState({ status: "loading", posts: [] });
  const [search, setSearch] = useState("");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/blog?limit=${compact ? 5 : 50}`, { signal: controller.signal })
      .then(async response => { if (!response.ok) throw new Error("Could not load posts"); return response.json(); })
      .then(result => setState({ status: "ready", posts: result.data }))
      .catch(error => { if (error.name !== "AbortError") setState({ status: "error", posts: [] }); });
    return () => controller.abort();
  }, [compact, attempt]);
  const posts = state.posts.filter(post => `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(search.toLowerCase()));
  return <div>
    {!compact && <div className={styles.search}><label htmlFor="journal-search">Find a thought</label><input id="journal-search" type="search" placeholder="Search articles…" value={search} onChange={event => setSearch(event.target.value)} /></div>}
    {state.status === "loading" && <div className={styles.grid} role="status" aria-label="Loading articles">{Array.from({ length: compact ? 5 : 3 }, (_, i) => <div className={styles.skeleton} key={i}><span/><span/><span/></div>)}</div>}
    {state.status === "error" && <div className={styles.empty} role="status"><span className={styles.emptyIcon} aria-hidden="true">↗</span><h3>The journal is taking a moment.</h3><p>Articles could not be loaded. Please try again shortly.</p><button type="button" onClick={() => { setState({ status: "loading", posts: [] }); setAttempt(value => value + 1); }}>Try again ↗</button></div>}
    {state.status === "ready" && posts.length === 0 && <div className={styles.empty}><span className={styles.emptyIcon} aria-hidden="true">✳</span><h3>{state.posts.length ? "No matching thoughts." : "Good things take a little thought."}</h3><p>{state.posts.length ? "Try a different title, topic, or keyword." : "The journal is just getting started. Notes on code, curiosity, and the web are on their way."}</p>{!state.posts.length && <Link href="/contact">Start a conversation ↗</Link>}</div>}
    {state.status === "ready" && posts.length > 0 && <div className={`${styles.grid} ${compact ? styles.compact : ""}`}>{posts.map(post => <Link className={styles.post} href={articleHref(post.slug)} key={post.id}><div className={styles.postMeta}><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time><span>{post.category}</span></div><h3>{post.title}</h3>{!compact && <p>{post.excerpt}</p>}<span className={styles.postArrow} aria-hidden="true">↗</span></Link>)}</div>}
  </div>;
}
