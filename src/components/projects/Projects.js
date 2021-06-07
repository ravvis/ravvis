import {PROJECTS} from "./Utils";
import ProjectCard from "./project/ProjectCard";
import {Link} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";

const Projects = () => {
  return <div>
    <h2 className="py-3 d-flex align-items-center">
      <Link href="#projects" color="inherit">
        Personal projects
      </Link>
      <div className="px-1"/>
      <Tooltip title="Projects on github">
        <Link href={'https://github.com/singh-ravi-siso'} target="_blank">
          <IconButton aria-label={"Projects on github"} >
            <GitHubIcon/>
          </IconButton>
        </Link>
      </Tooltip>
    </h2>
    {PROJECTS.map((project, index) => <ProjectCard {...project} key={`project-${index}`}/>)}
  </div>
}
export default Projects;
