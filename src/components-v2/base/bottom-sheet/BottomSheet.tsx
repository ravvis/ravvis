import {memo, ReactChildren, ReactElement} from "react";
import styles from "./BottomSheet.module.css"
import classNames from "classnames";

const Drawer = (
  { children, show, onClose, header = "" }: {
    children: ReactChildren | ReactElement, show: Boolean, onClose : any, header?: string
  }
) => (
  <>
    <div className={show ? styles.backdrop : ''} onClick={onClose} />
    <div className={classNames(styles.drawer, { [styles.open]: show })}>
      {
        !!header && <div className={styles.header}>
          { header }
        </div>
      }
      {children}
    </div>
  </>
);

export default memo(Drawer);
