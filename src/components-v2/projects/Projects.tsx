import SectionLayout from "../layouts/SectionLayout";
import styles from "./Projects.module.css";
import ProjectList from "./ProjectList";

export default function Projects() {
  return <SectionLayout sectionId="projects" header="What I've been working on">
    <>
      <p className={styles.projectsParagraph}>
        I like to apply my learnings to build things that I believe in. Here are some of the projects that I built.
      </p>
      <ProjectList/>
      {/*<CurrentProject/>*/}
    </>
  </SectionLayout>
}