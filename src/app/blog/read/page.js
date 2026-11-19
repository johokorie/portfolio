import { Suspense } from "react";
import BlogArticle from "@/components/BlogArticle";
import styles from "@/components/Page.module.css";
export const metadata = { title: "From the journal" };
export default function ReadArticlePage() { return <div className={styles.page}><Suspense fallback={<p role="status">Opening the journal…</p>}><BlogArticle /></Suspense></div>; }
