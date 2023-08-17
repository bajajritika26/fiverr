import Featured from "../../components/featured/Featured";
import Features from "../../components/features/Features";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Blue from "../../components/blue/Blue";
import Slide from "../../components/Slide/Slide";
import "./Home.css";


import React from 'react'
import ProjectsSlide from "../../components/projectsSlide/ProjectsSlide";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy/>
      <Slide/>
      <Features/>
      <Blue/>
      <ProjectsSlide/>
    </div>
  )
}

export default Home
