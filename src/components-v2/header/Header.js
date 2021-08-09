// import {RESUME_URL} from "../../Utils";
import Link from "next/link";
import styles from "./Header.module.css";
import Title from "./Title";
import SelectFavColor from "../select-fav-color/SelectFavColor";
const NAVS = [
  {
    url: "#projects",
    label: "Projects",
  },
  {
    url: "https://ravvis.hashnode.dev/",
    label: "Blogs",
    external: true
  },
  // {
  //   url: RESUME_URL(),
  //   label: "Resume",
  // }
]

export default function Header({ className = "" }){
  return <div className={`${styles.headerWrapper} ${className}`}>
    <Title/>
    <ul className={styles.headerNavWrapper}>
      {
        NAVS.map(nav => <li className={styles.headerNavItem}>
          <Link href={nav.url}>
            { nav.label }
          </Link>
        </li>)
      }
      <li className={styles.headerNavItem}>
        <SelectFavColor/>
      </li>
    </ul>
  </div>
}