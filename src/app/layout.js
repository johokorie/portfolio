import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { meta } from "@/content_option";
import styles from "./layout.module.css";
import "./globals.css";

const bodyFont = localFont({ src: "../assets/fonts/DMSans-Variable.ttf", variable: "--font-body", weight: "100 1000", display: "swap" });
const displayFont = localFont({ src: "../assets/fonts/BarlowCondensed-SemiBold.ttf", variable: "--font-display", weight: "600", display: "swap" });
export const metadata = { title: { default: "John Okorie — Frontend Developer", template: "%s — John Okorie" }, description: meta.description, authors: [{ name: "John Okorie" }], icons: { icon: "/favicon.ico" }, manifest: "/manifest.json" };
const themeScript = `try{var theme=localStorage.getItem('theme');if(theme==='light'||theme==='dark')document.documentElement.dataset.theme=theme}catch{}`;
export default function RootLayout({ children }) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><a className={styles.skipLink} href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1} className={styles.main}>{children}</main><Footer /></body></html>;
}
