import React from "react";
import { cards } from "../../data";
import "./Slide.css";
import CatCard from "../catCard/catCard";
import Slider from "react-slick";

const Slide = () => {
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
         right :"50px",
         zIndex : 1,
         
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
         left :"45px",
         zIndex :1,
    
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
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
    <div className="slide">
      <Slider
        {...settings}
        // style={{ margin: "50px", padding: "50px" }}
        className="slider"
      >
        {cards?.map((card) => (
          <CatCard card={card} key={card.id} />
        ))}
        
      </Slider>
      
    </div>
  );
};

export default Slide;
