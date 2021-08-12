import styles from "./SectionLayout.module.css";

export default function SectionLayout({ header, children, sectionId = "" }) {
  return <div id={sectionId || null} className={styles.sectionLayout}>
    {
      !!header && <h1 className={`${styles.sectionHeader}`}>{ header }</h1>
    }
    <div>
      { children }
    </div>
  </div>
}