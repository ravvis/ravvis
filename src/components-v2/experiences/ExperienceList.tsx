import ExperienceCta from "./ExperienceCta";
import styles from "./Experiences.module.css";
import type {myExperienceType} from "../../data-store/types";

export default function ExperienceList({ list } : { list: Array<myExperienceType> }){
  return <div className={styles.experienceList}>
    {
      list.map((experience) => <ExperienceCta { ...experience }/>)
    }
  </div>
}