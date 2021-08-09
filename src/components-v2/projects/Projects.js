import SectionLayout from "../layouts/SectionLayout";
import CurrentProject from "./CurrentProject";

export default function Projects(){
  return <SectionLayout sectionId="projects" header="What I've been working on">
    <>
      <p>
        I like to apply my learnings to build things that I believe in
      </p>
      <CurrentProject/>
    </>
  </SectionLayout>
}