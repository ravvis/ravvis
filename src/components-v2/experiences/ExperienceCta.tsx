import styles from "./Experiences.module.css";
import Link from "next/link"

export default function ExperienceCta(
  { name,
    timeline,
    position,
    readMoreLink = ""
  }: {
    name: string,
    timeline: string,
    position: string,
    readMoreLink? : string
  }){
  return <div className={styles.experienceCTA}>
    <Link href={readMoreLink || `/work/${name}`}>
      <a>
        <h2>{ name }</h2>
        <p>{ position }</p>
        <p>{ timeline }</p>
        <div className={styles.experienceCTAViewDetails}>
          READ MORE
          <span> › </span>
        </div>
      </a>
    </Link>
  </div>
}