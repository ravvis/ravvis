import "./Profile.css";
import GetInTouch from "./get-in-touch/GetInTouch";
import Avatar from "./avatar/Avatar";

const Profile = () => {
  return (
    <div className="Profile p-4 py-lg-5 my-lg-5 d-flex flex-column justify-content-center align-items-center">
      <Avatar/>
      <div className="p-2"/>
      <GetInTouch/>
    </div>
  )
}

export default Profile;
