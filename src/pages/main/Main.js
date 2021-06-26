import Profile from "../../components/profile/Profile";
import Header from "../../components/header/Header";

import "./Main.css";
import Projects from "../../components/projects/Projects";
import Experiences from "../../components/experience/Experiences";
import Contact from "../../components/contact/Contact";
import {Divider} from "@material-ui/core";
import Slogan from "../../components/slogan/Slogan";
import Gallery from "../../components/gallery/bio/Gallery";

const Main = () => {
  return <div className="Main">
    <div id="home">
      <Header/>
    </div>
    {/*<div className="p-4"/>*/}
    <div className="p-4">
      <Divider/>
    </div>
    <div className="p-1"/>
    <div id="profile">
      <Slogan/>
    </div>
    <div className="p-3"/>
    <div id="profile">
      <Profile/>
    </div>
    <div className="py-3" style={{

    }}>
      <Gallery/>
    </div>
    <div id="experiences">
      <Experiences/>
    </div>
    <div className="p-3">
      <Divider/>
    </div>
    <div id="projects">
      <Projects/>
    </div>
    <div className="p-3">
      <Divider/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
  </div>
}

export default Main;
