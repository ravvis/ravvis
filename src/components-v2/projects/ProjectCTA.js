import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCTA.module.css";

export default function ProjectCTA({ imageUrl, title, description, link }) {
  return <div className={styles.projectCTA}>
    <Link href={link}>
      <div>
        <Image src={imageUrl} width={100} height={100}/>
        <div>
          <h1 className={styles.projectCTATitle}>{ title }</h1>
          <p className={styles.projectCTADescription}>{ description }</p>
          <div className={styles.projectCTAViewProject}>
            VIEW PROJECT
            <span> › </span>
          </div>
        </div>
      </div>
    </Link>
  </div>
}