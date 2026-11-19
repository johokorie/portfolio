"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscGrabber, VscClose } from "react-icons/vsc";
import ThemeToggle from "./ThemeToggle";
import { logotext, socialprofils } from "@/content_option";
import styles from "./Header.module.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const dialog = useRef(null);
  const pathname = usePathname();
  const previousOverflow = useRef("");

  function closeMenu() { dialog.current?.close(); }

  function openMenu() {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
  }

  function restoreScroll() { document.body.style.overflow = previousOverflow.current; }

  useEffect(() => () => { document.body.style.overflow = previousOverflow.current; }, []);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="John — home">{logotext}</Link>
        <div className={styles.controls}>
          <ThemeToggle />
          <button type="button" className={styles.iconButton} onClick={openMenu} aria-label="Open navigation" aria-haspopup="dialog" aria-controls="site-navigation">
            <VscGrabber aria-hidden="true" />
          </button>
        </div>
      </header>
      <dialog ref={dialog} id="site-navigation" className={styles.dialog} aria-label="Site navigation" onClose={restoreScroll}>
        <div className={styles.dialogHeader}>
          <Link href="/" className={styles.logo} onClick={closeMenu} aria-label="John — home">{logotext}</Link>
          <button type="button" className={styles.iconButton} onClick={closeMenu} aria-label="Close navigation" autoFocus>
            <VscClose aria-hidden="true" />
          </button>
        </div>
        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
        <div className={styles.menuFooter}>
          <div className={styles.socials}>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <span>Copyright © {logotext}</span>
        </div>
      </dialog>
    </>
  );
}
