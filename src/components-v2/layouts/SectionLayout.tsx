import styles from "./SectionLayout.module.css";
import type {ReactNode} from "react";

export default function SectionLayout(
  { header,
    children,
    sectionId = "",
    className = ""
  }: {
    header?: ReactNode,
    children?: ReactNode | Element,
    sectionId?: string,
    className?: string
  }) {
  return <div id={sectionId || undefined} className={`${styles.sectionLayout} ${className}`}>
    {
      !!header && <h1 className={`${styles.sectionHeader}`}>{ header }</h1>
    }
    <div>
      { children }
    </div>
  </div>
}