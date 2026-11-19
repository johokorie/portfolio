import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contactConfig } from "@/content_option";
import pageStyles from "@/components/Page.module.css";
import styles from "./page.module.css";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className={pageStyles.page}>
      <PageHeader title="Contact Me" />
      <div className={pageStyles.section}>
        <section className={styles.details} aria-labelledby="contact-heading">
          <h2 id="contact-heading">Get in touch</h2>
          <address><strong>Email:</strong> <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a></address>
          <p>{contactConfig.description}</p>
        </section>
        <ContactForm />
      </div>
    </div>
  );
}
