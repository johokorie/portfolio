"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import bridge from "@/assets/images/Bridge.png";
import portrait from "@/assets/images/JOHN.png";
import styles from "./ProjectStrip.module.css";
const items=[{label:"Bridge",image:bridge,href:"/project/bridge"},{label:"Project study 01",text:"Less, but better.",href:"/project"},{label:"Frontend development",text:"Build. Learn. Repeat.",href:"/about"},{label:"John Okorie",image:portrait,href:"/about"},{label:"Project study 02",text:"Curiosity drives the work.",href:"/project"},{label:"Let’s talk",text:"Your next idea, built.",href:"/contact"}];
export default function ProjectStrip(){const strip=useRef(null);function move(direction){strip.current.scrollBy({left:direction*320,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}return <div className={styles.wrapper}><div ref={strip} className={styles.strip} aria-label="Portfolio highlights">{items.map((item,i)=><Link className={styles.item} key={item.label} href={item.href}><span className={styles.number}>0{i+1}</span><div className={`${styles.tile} ${styles[`tile${i}`]}`}>{item.image?<Image src={item.image} alt={item.label} fill sizes="220px"/>:<span>{item.text}</span>}</div></Link>)}</div><div className={styles.arrows}><button type="button" aria-label="Previous highlight" onClick={()=>move(-1)}>←</button><button type="button" aria-label="Next highlight" onClick={()=>move(1)}>→</button></div></div>}
