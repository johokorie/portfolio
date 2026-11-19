import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "@/content_option";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <aside className={styles.rail} aria-label="Follow John">
      <ul>
        {[["twitter", "Twitter", FaTwitter], ["github", "GitHub", FaGithub], ["linkedin", "LinkedIn", FaLinkedin]].map(([key, label, Icon]) => (
          <li key={key}><a href={socialprofils[key]} aria-label={label} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" /></a></li>
        ))}
      </ul>
      <span className={styles.label}>Follow Me</span>
    </aside>
  );
}
