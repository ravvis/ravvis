import Logo from "../Logo";
import styles from "./Footer.module.css";
import {FooterLinks, sourceCodeURL} from "../../data-store";

export default function () {
  return <div className={styles.footerWrapper}>
    <div className={styles.footerLeftWrapper}>
      <Logo/>
      <a className={styles.footerSourceCode} target="_blank" href={sourceCodeURL}>See the source code</a>
    </div>
    <div className={styles.footerLinkWrapper}>
      <div>
        {
          FooterLinks.map((footerLink) => <a href={footerLink.link} className={styles.footerLink} target="_blank">
            { footerLink.icon }
          </a>)
        }
      </div>
    </div>
  </div>
}