"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscGrabber, VscClose } from "react-icons/vsc";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";
const navigation = [{href:"/project",label:"Work"},{href:"/#about-me",label:"About"},{href:"/blog",label:"Journal"},{href:"/contact",label:"Get in touch"}];
export default function Header() {
  const dialog=useRef(null); const pathname=usePathname(); const previousOverflow=useRef("");
  function closeMenu(){dialog.current?.close();}
  function openMenu(){previousOverflow.current=document.body.style.overflow;document.body.style.overflow="hidden";dialog.current.showModal();}
  function restoreScroll(){document.body.style.overflow=previousOverflow.current;}
  useEffect(()=>()=>{document.body.style.overflow=previousOverflow.current;},[]);
  return <><header className={styles.header}><Link href="/" className={styles.logo} aria-label="John Okorie — home"><span className={styles.dot}/>John Okorie</Link><nav className={styles.desktopNav} aria-label="Main navigation">{navigation.map(({href,label})=><Link key={href} href={href} aria-current={pathname===href?"page":undefined}>{label}</Link>)}</nav><div className={styles.controls}><ThemeToggle /><span className={styles.copyright}>© {new Date().getUTCFullYear()}</span><button className={`${styles.iconButton} ${styles.menuButton}`} type="button" onClick={openMenu} aria-label="Open navigation" aria-haspopup="dialog" aria-controls="site-navigation"><VscGrabber aria-hidden="true"/></button></div></header><dialog ref={dialog} id="site-navigation" className={styles.dialog} aria-label="Site navigation" onClose={restoreScroll}><div className={styles.dialogHeader}><Link href="/" className={styles.logo} onClick={closeMenu}><span className={styles.dot}/>John Okorie</Link><button type="button" className={styles.iconButton} onClick={closeMenu} aria-label="Close navigation" autoFocus><VscClose aria-hidden="true"/></button></div><nav className={styles.navigation} aria-label="Mobile navigation">{navigation.map(({href,label},i)=><Link href={href} key={href} onClick={closeMenu}><span>0{i+1}</span>{label}</Link>)}</nav><p className={styles.menuNote}>Frontend developer. Visionary. Problem-solver.</p></dialog></>;
}
