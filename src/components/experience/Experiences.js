import {EXPERIENCES} from "./Utils";
import ProjectCard from "../projects/project/ProjectCard";
import Link from "next/link";

const Experiences = () => {
  return <>
    <h2 className="py-3 d-flex align-items-center">
      <Link href="#experiences">
        <a color="inherit">
          Internships
        </a>
      </Link>
    </h2>
    {EXPERIENCES.map((experience, index) => <ProjectCard {...experience} key={`experience-${index}`}/>)}
  </>
}
export default Experiences;
