import Link from "next/link";
import styles from "./Page.module.css";

export default function PageHeader({ title }) {
  return (
    <div className={styles.heading}>
      <h1>{title}</h1>
      <Link href="/">Go Back</Link>
    </div>
  );
}
