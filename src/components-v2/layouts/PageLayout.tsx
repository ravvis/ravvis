import Header from "../header/Header";
import styles from "./PageLayout.module.css";
import Footer from "../footer/Footer";
import type { ReactNode } from "react";

const PageLayout = ({ children } : { children : ReactNode | Element }) => {
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
export default PageLayout;