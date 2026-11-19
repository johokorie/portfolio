"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ArticleBody from "./ArticleBody";
import { formatDate } from "@/lib/blog.mjs";
import styles from "./BlogArticle.module.css";

export default function BlogArticle() {
  const slug = useSearchParams().get("post");
  const [state, setState] = useState({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();
    fetch(`/api/blog/${encodeURIComponent(slug)}`, { signal: controller.signal })
      .then(async response => { if (response.status === 404) return { status: "missing" }; if (!response.ok) throw new Error("Could not load article"); return { status: "ready", post: (await response.json()).data }; })
      .then(setState).catch(error => { if (error.name !== "AbortError") setState({ status: "error" }); });
    return () => controller.abort();
  }, [slug, attempt]);
  const status = !slug ? "missing" : state.status;
  if (status === "loading") return <div className={styles.loading} role="status"><span/><span/><span/><p>Opening the journal…</p></div>;
  if (status !== "ready") return <div className={styles.message}><p className={styles.eyebrow}>The journal</p><h1>{status === "missing" ? "This page is still unwritten." : "A brief interruption."}</h1><p>{status === "missing" ? "This article may have moved or is no longer published." : "The article could not be loaded. Please try again."}</p>{status === "error" && <button type="button" onClick={() => { setState({ status: "loading" }); setAttempt(value => value + 1); }}>Try again ↗</button>}<Link href="/blog">Back to the journal ↗</Link></div>;
  const post = state.post;
  return <article className={styles.article}><Link className={styles.back} href="/blog">← All thoughts</Link><header><p className={styles.eyebrow}>{post.category} / <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></p><h1>{post.title}</h1><p className={styles.excerpt}>{post.excerpt}</p><div className={styles.byline}>Words by John Okorie</div></header>{post.coverUrl && <div className={styles.cover}><Image src={post.coverUrl} alt={post.coverAlt || ""} width={1600} height={1000} unoptimized /></div>}<div className={styles.body}><ArticleBody blocks={post.content}/></div><Link className={styles.back} href="/blog">← More from the journal</Link></article>;
}
