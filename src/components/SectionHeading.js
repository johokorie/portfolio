import Link from "next/link";
import styles from "./Sections.module.css";
export default function SectionHeading({eyebrow,title,description,href,label}){return <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{eyebrow}</p><h2 className={styles.sectionTitle}>{title}</h2>{description&&<p className={styles.description}>{description}</p>}</div>{href&&<Link className={styles.smallButton} href={href}>{label||"Get in touch"}<span aria-hidden="true">↗</span></Link>}</div>}
