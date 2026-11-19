import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import { introdata } from "@/content_option";
import portrait from "@/assets/images/JOHN.png";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.portrait}>
        <Image src={portrait} alt="Black and white portrait of John Okorie" fill sizes="(max-width: 991px) 100vw, 50vw" preload className={styles.image} />
      </div>
      <div className={styles.text}>
        <div className={styles.intro}>
          <p className={styles.greeting}>{introdata.title}</p>
          <h1 className={styles.title}><Typewriter words={Object.values(introdata.animated)} /></h1>
          <p className={styles.description}>{introdata.description}</p>
          <div className={styles.actions}>
            <Link href="/project" className={styles.button}>Projects</Link>
            <Link href="/about" className={styles.button}>About</Link>
            <Link href="/contact" className={styles.button}>Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
