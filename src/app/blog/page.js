import PageHeader from "@/components/PageHeader";
import BlogFeed from "@/components/BlogFeed";
import styles from "@/components/Page.module.css";
export const metadata = { title: "Journal", description: "Notes on frontend development, technology, and the process behind John’s work." };
export default function BlogPage() { return <div className={styles.page}><PageHeader title="The journal"/><BlogFeed /></div>; }
