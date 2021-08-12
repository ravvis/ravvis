import styles from "./Modal.module.css";
import type { ReactNode } from 'react'

export default function (
  {
    children,
    show,
    padding = true,
    header
  } : {
    children: ReactNode,
    show?: boolean,
    padding?: boolean,
    header?: ReactNode
  }
  ) {
  return <div className={`${styles.modalWrapper} ${show ? styles.modalWrapperShow : ""}`}>
    <div className={`${styles.modal}`}>
      {
        !!header && <div className={`${styles.modalHeader}`}>
          { header }
        </div>
      }
      <div className={`${padding ? styles.modalContentPadding : ""}`}>
        { children }
      </div>
    </div>
  </div>
}