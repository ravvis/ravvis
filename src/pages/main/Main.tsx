import Profile from "../../components/profile/Profile";
import Header from "../../components/header/Header";

import styles from "./Main.module.css";
import Contact from "../../components/contact/Contact";
import Slogan from "../../components/slogan/Slogan";
import Gallery from "../../components/gallery/bio/Gallery";
import Experiences from "../../components/experience/Experiences";
import Projects from "../../components/projects/Projects";

const Main = () => {
  return <div className={styles.Main}>
    <div id="home">
      <Header/>
    </div>
    <div className="p-2 p-sm-4">

    </div>
    <div className="p-1"/>
    <div id="profile">
      <Slogan/>
    </div>
    <div className="p-3"/>
    <div id="profile">
      <Profile/>
    </div>
    <div className="py-3">
      <Gallery/>
    </div>
    <div id="experiences">
      <Experiences/>
    </div>
    <div className="p-3">

    </div>
    <div id="projects">
      <Projects/>
    </div>
    <div className="p-3">

    </div>
    <div id="contact">
      <Contact/>
    </div>
  </div>
}

export default Main;
