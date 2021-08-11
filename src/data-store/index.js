import {GitHub, Instagram, Linkedin, Twitter} from "react-feather";

export const projects = [
  {
    title: "BitQ",
    description: "An easy to use Bitbucket API client for Javascript",
    link: "/project/BitQ",
    imageUrl: "/images/projects/BITLITE.png"
  },
  {
    title: "Bitlite",
    description: "A lightweight Bitbucket mWeb client",
    link: "/project/Bitlite",
    imageUrl: "/images/projects/BITLITE.png"
  },
]

export function getProjectByName(projectName) {
  return projects.find(project => project.title === projectName);
}
export function getExcludingProjects(projectName){
  return projects.filter(project => project.title !== projectName);
}
export const FooterLinks = [
  {
    label: "Github",
    link: "https://github.com/ravvis",
    icon: <GitHub/>
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ravvis/",
    icon: <Linkedin/>
  },
  {
    label: "Twitter",
    link: "https://twitter.com/ssravvi",
    icon: <Twitter/>
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/ravvvis/",
    icon: <Instagram/>
  },
]
export const sourceCodeURL = "https://github.com/ravvis/ravvis";