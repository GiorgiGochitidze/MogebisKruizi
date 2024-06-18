import React, { useState } from "react";
import "./CSS/leaderboard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import users from "./LeaderBoardArray.js";

import purpleRect from "../assets/purpleRect.png";
import blueRect from "../assets/blueRect.png";
import redRect from "../assets/redRect.png";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import LeaderBoardUsers from "./LeaderBoardUsers";

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

  // Sort users array by score in descending order
  const sortedUsers = users.sort((a, b) => b.score - a.score);

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
          spaceBetween={0} // Adjust as needed
          onSwiper={setSwiperInstance}
          loop={false}
          allowSlideNext={sliderContent.length > 1}
          allowSlidePrev={sliderContent.length > 1}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile portrait
            480: { slidesPerView: 2 }, // Small screens
            640: { slidesPerView: 3 }, // Mobile landscape
            768: { slidesPerView: 4 }, // Tablet
            1024: { slidesPerView: 5 }, // Desktop
            1440: { slidesPerView: 6 }, // Large screens
          }}
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

      <div className="leaderboard-list">
        <div className="info">
          <div className="info-startPart" style={{ display: "flex" }}>
            <p>პოზიცია:</p>
            <p className="removeMargin" style={{ marginLeft: "50px" }}>
              მომხმარებელი
            </p>
          </div>
          <div
            className="info-lastPart"
            style={{ display: "flex", gap: "160px", marginRight: "50px" }}
          >
            <p>ლიდერ ქულა</p>
            <p>პრიზი</p>
          </div>
        </div>

        {sortedUsers.map((user, index) => (
          <LeaderBoardUsers
            key={index}
            userName={user.userName}
            score={user.score}
            prizeName={user.prizeName}
            position={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
