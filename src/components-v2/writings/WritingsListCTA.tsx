import type { WritingType } from "../../data-store/types";
import WritingsListCTATags from "./WritingsListCTATags";

export default function WritingsListCTA({ title, link, description, tags } : WritingType) {
  return <div>
    <h2>{ title }</h2>
    {
      !!description && <p>
        { description }
      </p>
    }
    {
      !!tags.length && <WritingsListCTATags tags={tags}/>
    }
  </div>
}