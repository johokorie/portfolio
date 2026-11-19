"use client";

import { useState } from "react";
import { contactConfig } from "@/content_option";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const body = new URLSearchParams(new FormData(form)).toString();
    setStatus("sending");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch { setStatus("error"); }
  }

  return (
    <form name="contact" method="POST" action="/__forms.html" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className={styles.form} aria-busy={status === "sending"}>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <fieldset disabled={status === "sending"} className={styles.fields}>
        <legend className={styles.hidden}>Send John a message</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name" autoComplete="name" required maxLength={120} />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" required maxLength={254} />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message" rows={6} required maxLength={5000} />
        </div>
        <button type="submit" className={styles.submit}>{status === "sending" ? "Sending..." : "Send"}</button>
      </fieldset>
      <div className={styles.feedback} aria-live="polite" aria-atomic="true">
        {status === "success" && <p className={styles.success}>Thank you! Your message has been sent. Looking forward to reading it.</p>}
        {status === "error" && <p role="alert" className={styles.error}>Your message could not be sent. Please try again or <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>email me directly</a>.</p>}
      </div>
    </form>
  );
}
