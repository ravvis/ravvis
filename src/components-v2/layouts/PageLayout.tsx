import Header from "../header/Header";
import styles from "./PageLayout.module.css";
import Footer from "../footer/Footer";

export default function PageLayout({ children }) {
  return <div className={styles.pageLayoutWrapper}>
    <div className={styles.pageLayout}>
      <Header className={styles.pageLayoutHeader}/>
      <div className={styles.pageLayoutBody}>
        { children }
      </div>
      <Footer/>
    </div>
  </div>
}