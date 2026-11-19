import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import { meta } from "@/content_option";
import styles from "./layout.module.css";
import "./globals.css";

const raleway = localFont({
  src: "../assets/fonts/Raleway-Variable.ttf",
  variable: "--font-raleway",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: { default: meta.title, template: "%s - John" },
  description: meta.description,
  authors: [{ name: "John Okorie" }],
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.json",
};

const themeScript = `try{var theme=localStorage.getItem('theme');if(theme==='light'||theme==='dark'){document.documentElement.dataset.theme=theme}}catch{}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className={styles.skipLink} href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" className={styles.main} tabIndex={-1}>{children}</main>
        <SocialLinks />
      </body>
    </html>
  );
}
import localFont from "next/font/local";
