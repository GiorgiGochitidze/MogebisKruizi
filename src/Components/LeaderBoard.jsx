import React, { useState } from "react";
import "./CSS/leaderboard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import arrowedBorder from "../assets/arrowedBorder.png";
import arrowedBorder3 from "../assets/arrowedBorder3.png";
import purpleRect from "../assets/purpleRect.png";
import blueRect from "../assets/blueRect.png";
import redRect from "../assets/redRect.png";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const LeaderBoard = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const sliderContent = [
    "24 აპრილი",
    "25 აპრილი",
    "26 აპრილი",
    "23 აპრილი",
    "24 აპრილი",
    "25 აპრილი",
    "26 აპრილი",
  ];

  const handleSlideNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleSlideClick = (index) => {
    setSelectedSlide(index);
  };

  return (
    <div className="leaderboard-container">
      <h1 style={{ textAlign: "center" }}>
        მოხვდი ლიდერბორდში დღის ჯამური ქულით
      </h1>
      <div className="date-slider-container">
        <button className="arrow-btn" onClick={handleSlidePrev}>
          <MdOutlineKeyboardArrowLeft style={{ opacity: "100%" }} />
        </button>
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          onSwiper={setSwiperInstance}
        >
          {sliderContent.map((date, index) => (
            <SwiperSlide
              key={index}
              className={`date-slider ${
                selectedSlide === index ? "selected" : ""
              }`}
              onClick={() => handleSlideClick(index)}
            >
              <div className="top-line"></div>
              <p>
                {date.split(" ")[0]}
                <br />
                {date.split(" ")[1]}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="arrow-btn" onClick={handleSlideNext}>
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>

      <div className="statistic">
        <div className="static-header-container">
          <div className="header-container">
            <TbTriangleInvertedFilled className="traingle1" />
            <TbTriangleInvertedFilled size={10} className="traingle2" />
            <p className="statistic-header">ჩემი სტატისტიკა</p>
            <TbTriangleInvertedFilled className="traingle3" />
            <TbTriangleInvertedFilled size={10} className="traingle4" />
          </div>
        </div>

        <div className="statistic-cards-container">
          <div className="statistics-card">
            <img src={purpleRect} alt="purpleRect" />
            <p className="statistic-amount">16</p>
            <p>პოზიცია</p>
          </div>

          <div className="statistics-card">
            <img src={blueRect} alt="blueRect" />
            <p>ქულები</p>
            <p className="statistic-amount">1244</p>
          </div>

          <div className="statistics-card">
            <img src={redRect} alt="redRect" />
            <p className="statistic-amount">200</p>
            <p>ფრისპინი</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
