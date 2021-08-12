import SectionLayout from "../layouts/SectionLayout";
import {myExperiencesNote, myExperiences} from "../../data-store";
import ExperienceList from "./ExperienceList";

export default function MyExperiences(){
  return <SectionLayout header="Experiences">
    <div>
      <div>
        { myExperiencesNote }
      </div>
      <div>
        <ExperienceList list={myExperiences}/>
      </div>
    </div>
  </SectionLayout>
}