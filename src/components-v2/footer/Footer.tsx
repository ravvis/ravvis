import styles from "./Footer.module.css";
import {FooterLinks, sourceCodeURL} from "../../data-store";

export default function () {
  return <footer className={styles.footerWrapper}>
    <div className={styles.footerLinkWrapper}>
      <div>
        {
          FooterLinks.map((footerLink, index) => <a href={footerLink.link} key={index} className={styles.footerLink} target="_blank">
            { footerLink.icon }
          </a>)
        }
      </div>
    </div>
  </footer>
}