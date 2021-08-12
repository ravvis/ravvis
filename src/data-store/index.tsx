import {GitHub, Instagram, Linkedin, Twitter} from "react-feather";
import type {footerLinkType, myExperienceType, myProjectType, WritingType} from "./types"
export const projects : Array<myProjectType> = [
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

export function getProjectByName(projectName: string | undefined | string[]) : myProjectType | undefined {
  return projects.find(project => project.title === projectName);
}
export function getExcludingProjects(projectName: string | undefined) : Array<myProjectType> {
  return projects.filter(project => project.title !== projectName);
}
export const FooterLinks : Array<footerLinkType> = [
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
export const sourceCodeURL : string = "https://github.com/ravvis/ravvis";

export const myExperiencesNote : string = "";
export const myExperiences : Array<myExperienceType> = [
  {
    name: "INDmoney",
    position: "Software Developer Intern",
    timeline: "July 2021 - Present"
  },
  {
    name: "Stockarea",
    position: "Software Developer Intern",
    timeline: "May 2020 - July 2021"
  },
  {
    name: "Kuvera",
    position: "Software Developer Intern",
    timeline: "Dec 2019"
  },
]

export const Writings : Array<WritingType> = [
  {
    title: "Coding a simple module bundler 📦",
    description: "Let's understand how module bundlers work under the hood 🤔",
    link: "https://ravvis.hashnode.dev/coding-a-simple-module-bundler",
    date: "Jul 6, 2021",
    tags: ["Javascript", "Module Bundlers", "Webpack"]
  },
  {
    title: "Coding a simple module bundler 📦",
    description: "Let's understand how module bundlers work under the hood 🤔",
    link: "https://ravvis.hashnode.dev/coding-a-simple-module-bundler",
    date: "Jul 6, 2021",
    tags: ["Javascript", "Module Bundlers", "Webpack"]
  }
]
