import {useRouter} from "next/router";
import {getProjectByName} from "../../src/data-store";
import ProjectLayout from "../../src/components-v2/projects/ProjectLayout";

export default function Project(){
  const router = useRouter()
  const { projectName } = router.query;
  const project = getProjectByName(projectName);

  if(typeof projectName !== "string") return <></>;

  return <ProjectLayout projectName={projectName}>
    {JSON.stringify(project)}
  </ProjectLayout>
}