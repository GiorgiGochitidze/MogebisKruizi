import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CSS/slider.css";
import logoForCard from "../assets/logoForCard.png";
import Bottles from "./Bottles";
import slides from "./slidesInfo";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        style={{ paddingInline: "20px" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`slides ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleSlideClick(index)}
          >
            <div
              className={`info-container ${
                activeIndex === index ? "" : "txtCenter"
              }`}
            >
              <p>{slide.header1}</p>
              <p>{slide.amount}</p>
            </div>
            <img
              className={`card-logo ${activeIndex === index ? "" : "none"}`}
              src={logoForCard}
              alt="logoForCard"
            />
            <img
             className={`card-img ${activeIndex === index ? "" : "top"}`}
              src={slide.mainImg || slide.image}
              alt={`Slide ${index + 1}`}
            />

            <div
              className={`lines-container ${
                activeIndex === index ? "" : "higher"
              }`}
            >
              <div className="left-line">
                <div className="line"></div>
                <div className="left-line-circle"></div>
              </div>
              დაგროვებული
              <div className="right-line">
                <div className="line"></div>
                <div className="right-line-circle"></div>
              </div>
            </div>

            <Bottles
              activeIndex={activeIndex}
              index={index}
              blackBottles={slide.blackBottles}
              filledBottles={slide.filledBottles}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
