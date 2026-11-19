"use client";

import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import styles from "./Header.module.css";

export default function ThemeToggle() {
  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("theme", nextTheme); } catch { /* Theme remains usable when storage is unavailable. */ }
  }

  return (
    <button type="button" className={styles.iconButton} onClick={toggleTheme} aria-label="Toggle light and dark theme">
      <WiMoonAltWaningCrescent4 aria-hidden="true" />
    </button>
  );
}
