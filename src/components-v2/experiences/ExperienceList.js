import ExperienceCta from "./ExperienceCta";
import styles from "./Experiences.module.css";

export default function ExperienceList({ list }){
  return <div className={styles.experienceList}>
    {
      list.map((experience) => <ExperienceCta { ...experience }/>)
    }
  </div>
}