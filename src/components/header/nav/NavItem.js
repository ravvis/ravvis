import styles from "./Nav.module.css";
import Link from "next/link";

const NavItem = ({ label, url, external }) => {
  return <div className={`pe-3 py-2 ${styles.NavItem}`}>
    <Link href={url} target={external ? "_blank" : "_self"}>
      {label}
    </Link>
  </div>
}
export default NavItem;
