import Profile from "../../components/profile/Profile";
import Header from "../../components/header/Header";

import "./Main.css";
import Contact from "../../components/contact/Contact";
import {Divider} from "@material-ui/core";
import Slogan from "../../components/slogan/Slogan";
import {Suspense, lazy} from "react";

const Gallery = lazy(() => import('../../components/gallery/bio/Gallery'));
const Experiences = lazy(() => import("../../components/experience/Experiences"));
const Projects = lazy(() => import( "../../components/projects/Projects"));

const Main = () => {
  return <div className="Main">
    <div id="home">
      <Header/>
    </div>
    <div className="p-2 p-sm-4">
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
      <Suspense fallback="Loading...">
        <Gallery/>
      </Suspense>
    </div>
    <div id="experiences">
      <Suspense fallback="Loading...">
        <Experiences/>
      </Suspense>
    </div>
    <div className="p-3">
      <Divider/>
    </div>
    <div id="projects">
      <Suspense fallback="Loading...">
        <Projects/>
      </Suspense>
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
