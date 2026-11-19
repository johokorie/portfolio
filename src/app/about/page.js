import PageHeader from "@/components/PageHeader";
import { dataabout, worktimeline, skills } from "@/content_option";
import pageStyles from "@/components/Page.module.css";
import styles from "./page.module.css";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className={pageStyles.page}>
      <PageHeader title="About me" />
      <section className={pageStyles.section} aria-labelledby="bio-heading">
        <h2 id="bio-heading">{dataabout.title}</h2>
        <p className={styles.bio}>{dataabout.aboutme}</p>
      </section>
      <section className={pageStyles.section} aria-labelledby="work-heading">
        <h2 id="work-heading">Work Timeline</h2>
        <div className={styles.timeline}>
          <table className={styles.table}>
            <caption className={styles.caption}>John’s work experience</caption>
            <tbody>
              {worktimeline.map((job) => (
                <tr key={`${job.where}-${job.date}`}>
                  <th scope="row">{job.jobtitle}</th><td>{job.where}</td><td>{job.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className={pageStyles.section} aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <ul className={styles.skills}>
          {skills.map(({ name }) => <li className={styles.skill} key={name}>{name}</li>)}
        </ul>
      </section>
    </div>
  );
}
