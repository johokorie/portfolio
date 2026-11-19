import Link from "next/link";
import styles from "@/components/Page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.heading}><h1>Page not found</h1></div>
      <p>This page may have moved. <Link href="/">Go back home</Link>.</p>
    </div>
  );
}
