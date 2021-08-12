import SectionLayout from "../layouts/SectionLayout";
import {Writings} from "../../data-store";
import WritingsListCTA from "./WritingsListCTA";

export default function WritingsListHome() {
  return <SectionLayout header="Writings">
    {
      Writings.map(writing => <WritingsListCTA {...writing}/>)
    }
  </SectionLayout>
}