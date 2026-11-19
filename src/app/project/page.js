import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { dataportfolio } from "@/content_option";
import bridge from "@/assets/images/Bridge.png";
import pageStyles from "@/components/Page.module.css";
import styles from "./page.module.css";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className={pageStyles.page}>
      <PageHeader title="Projects" />
      <div className={styles.projects}>
        {dataportfolio.map((project, index) => (
          <article className={styles.project} key={project.title}>
            {index === 0 ? (
              <Image src={bridge} alt="Bridge finance dashboard with cards, expenses, and transaction history" sizes="(max-width: 767px) 100vw, 33vw" className={styles.image} />
            ) : (
              <div className={`${styles.placeholder} ${index === 2 ? styles.alternate : ""}`} aria-hidden="true">
                <span>0{index + 1}</span><span>Less,<br />but better.</span>
              </div>
            )}
            <div className={styles.content}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {index === 0 ? <a href={bridge.src} target="_blank" rel="noopener noreferrer">View preview <span aria-hidden="true">↗</span></a> : <span className={styles.comingSoon}>Coming soon</span>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
