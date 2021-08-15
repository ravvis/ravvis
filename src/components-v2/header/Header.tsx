// import {RESUME_URL} from "../../Utils";
import Link from "next/link";
import styles from "./Header.module.css";
import Title from "./Title";
import SelectFavColor from "../select-fav-color/SelectFavColor";

export default function Header({ className = "" }){
  return <header className={`${styles.headerWrapper} ${className}`}>
    <Title/>
    <ul className={styles.headerNavWrapper}>
      <li className={styles.headerNavItem}>
        <SelectFavColor/>
      </li>
    </ul>
  </header>
}