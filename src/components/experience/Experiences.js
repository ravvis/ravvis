import {EXPERIENCES} from "./Utils";
import ProjectCard from "../projects/project/ProjectCard";
import {Link} from "@material-ui/core";

const Experiences = () => {
  return <>
    <h2 className="py-3 d-flex align-items-center">
      <Link href="#experiences" color="inherit">
        Internships
      </Link>
    </h2>
    {EXPERIENCES.map((experience, index) => <ProjectCard {...experience} key={index}/>)}
  </>
}
export default Experiences;
