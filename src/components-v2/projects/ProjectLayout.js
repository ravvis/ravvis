import PageLayout from "../layouts/PageLayout";
import Connect from "../connect/Connect";
import ProjectList from "./ProjectList";
import {getExcludingProjects} from "../../data-store";
import styles from "./ProjectLayout.module.css";
import SectionLayout from "../layouts/SectionLayout";

export default function ProjectLayout({ children, projectName }){
  const otherProjects = getExcludingProjects(projectName);
  return <PageLayout>
    <div className={styles.projectLayoutBody}>
      { children }
    </div>

    {otherProjects.length > 0 && <SectionLayout header="Other Projects" className={styles.otherProjects}>
      <ProjectList list={otherProjects}/>
    </SectionLayout>}

    <Connect/>
  </PageLayout>
}