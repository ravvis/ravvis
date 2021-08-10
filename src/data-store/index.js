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