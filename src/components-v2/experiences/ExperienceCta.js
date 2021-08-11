import styles from "./Experiences.module.css";
import Link from "next/link"

export default function ExperienceCta({ name, timeline, position }){
  return <div className={styles.experienceCTA}>
    <Link href={`/work/${name}`}>
      <a>
        <h2>{ name }</h2>
        <p>{ position }</p>
        <p>{ timeline }</p>
        <div className={styles.experienceCTAViewDetails}>
          VIEW DETAILS
          <span> › </span>
        </div>
      </a>
    </Link>
  </div>
}