// import {RESUME_URL} from "../../Utils";
import Link from "next/link";
import styles from "./Header.module.css";
import Title from "./Title";
import SelectFavColor from "../select-fav-color/SelectFavColor";
const NAVS = [
  {
    url: "https://github.com/ravvis",
    label: "Github",
    external: true,
    class: "d-block d-sm-none"
  },
  {
    url: "https://ravvis.hashnode.dev/",
    label: "Blogs",
    external: true,
    class: "d-block d-sm-none"
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
        NAVS.map((nav, index) => <li key={index} className={`${styles.headerNavItem} ${nav.class || ""}`}>
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