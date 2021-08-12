import styles from "./Projects.module.css";
import {projects} from "../../data-store";
import ProjectCTA from "./ProjectCTA";

export default function ProjectList({ list = projects }) {
  return <div className={styles.projectsList}>
    {
      list.map((project, index) => <div key={index} className={styles.projectsListItemWrapper}><ProjectCTA { ...project }/></div>)
    }
  </div>
}