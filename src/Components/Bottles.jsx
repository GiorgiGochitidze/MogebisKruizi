import React from "react";
import "./CSS/bottles.css";
import blackBottle from "../assets/blackBottle.png";
import filledBottle from "../assets/filledBottle.png";

const Bottles = ({ blackBottles, filledBottles, activeIndex, index }) => {
  const blackBottleArray = Array.from({ length: blackBottles });
  const filledBottleArray = Array.from({ length: filledBottles });

  return (
    <div className={`bottles-container ${activeIndex === index ? '' : 'higher2'}`}>
      {filledBottleArray.map((_, index) => (
        <img key={`filled-${index}`} src={filledBottle} alt="filled bottle" />
      ))}

      {blackBottleArray.map((_, index) => (
        <img
          key={`black-${index}`}
          src={blackBottle}
          alt="empty black bottle"
        />
      ))}
    </div>
  );
};

export default Bottles;
