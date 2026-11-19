"use client";

import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

export default function Typewriter({ words }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timeout;
    let word = 0;
    let length = words[0].length;
    let deleting = true;

    function tick() {
      if (media.matches) return;
      length += deleting ? -1 : 1;
      setText(words[word].slice(0, length));
      let delay = deleting ? 35 : 80;
      if (length === 0) {
        word = (word + 1) % words.length;
        deleting = false;
        delay = 250;
      } else if (length === words[word].length) {
        deleting = true;
        delay = 2200;
      }
      timeout = window.setTimeout(tick, delay);
    }

    function handleMotionChange() {
      window.clearTimeout(timeout);
      if (media.matches) setText(words[0]);
      else timeout = window.setTimeout(tick, 2200);
    }

    timeout = window.setTimeout(tick, 2200);
    media.addEventListener("change", handleMotionChange);
    return () => { window.clearTimeout(timeout); media.removeEventListener("change", handleMotionChange); };
  }, [words]);

  return (
    <>
      <span className={styles.accessible}>{words[0]}</span>
      <span aria-hidden="true">{text}<span className={styles.cursor}>|</span></span>
    </>
  );
}
