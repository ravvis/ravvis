import SectionLayout from "../layouts/SectionLayout";
import Image from "next/image";

export default function CurrentProject(){
  return <SectionLayout>
    <div className="d-flex">
      <div>
        <Image src="/images/projects/BITLITE.png" width={400} height={68}/>
      </div>
      <div>
        <h1>Bitlite</h1>
        <p className="textGray">
          My current work in progress, a bitbucket mWeb client 🪣
        </p>
        <p>
          COMING SOON
        </p>
      </div>
    </div>
  </SectionLayout>
}