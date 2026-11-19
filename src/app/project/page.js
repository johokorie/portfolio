import PageHeader from "@/components/PageHeader";
import PortfolioGallery from "@/components/PortfolioGallery";
import styles from "@/components/Page.module.css";
export const metadata={title:"Selected work"};
export default function ProjectsPage(){return <div className={styles.page}><PageHeader title="Selected work"/><PortfolioGallery /></div>}
