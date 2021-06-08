import "./Profile.css";
import GetInTouch from "./get-in-touch/GetInTouch";
import Avatar from "./avatar/Avatar";
import Bio from "../bio/Bio";

const Profile = () => {
  return (
    <div className="Profile py-2 d-flex flex-column-reverse flex-sm-row justify-content-between align-items-center align-items-sm-start">
      <div className="py-2">
        <Bio/>
      </div>
      <div className="ps-sm-5 py-2 d-flex flex-column justify-content-center align-items-center">
        <Avatar/>
        <div className="p-2"/>
        <GetInTouch/>
      </div>
    </div>
  )
}

export default Profile;
