import React from "react";
import { projects } from "../../data";
import "./ProjectsSlide.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import Slider from "react-slick";

const ProjectsSlide = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          position : "absolute",
          right:"70px",
          zIndex:1
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          position : "absolute",
          left : "50px",
          zIndex :1

        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    initialSlide: 0,
    // className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div c00lassName="projectsSlide">
      
      <Slider
        {...settings}
        style={{ margin: "50px", padding: "50px" }}
        className="slider"
      >
        {projects?.map((project) => (
          <ProjectCard
            style={{ margin: "50px" }}
            project={project}
            key={project.id}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsSlide;
