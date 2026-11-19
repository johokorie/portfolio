import Image from "next/image";
import Link from "next/link";
import { dataportfolio } from "@/content_option";
import bridge from "@/assets/images/Bridge.png";
import PageHeader from "@/components/PageHeader";
import styles from "@/components/Page.module.css";
import detail from "./page.module.css";
export const metadata = { title: "Bridge" };
export default function BridgePage() { return <div className={styles.page}><PageHeader title="Bridge"/><div className={detail.intro}><span>Frontend development / Finance</span><p>{dataportfolio[0].description}</p></div><div className={detail.image}><Image src={bridge} alt="Bridge dashboard showing financial cards, expenses, and transactions" sizes="90vw" preload /></div><div className={detail.next}><Link href="/project">← All projects</Link><Link href="/contact">Have a project in mind? ↗</Link></div></div>; }
