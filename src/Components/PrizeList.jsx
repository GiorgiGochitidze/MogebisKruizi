import "./CSS/prizelist.css";
import miniCar from "../assets/miniCar.png";
import PrizeCard from "./PrizeCard";
import miniCoin from "../assets/miniCoin.png";

const PrizeList = () => {
  return (
    <div className="prizelist-container">
      <div className="full-circle"></div>
      <h1 style={{textAlign: "center" }}>
        ჩემი პრიზების ისტორია
      </h1>

      <div className="prizes-container">
        <div className="prizes-cards-container">

          <div className="prize-lines-container" style={{ top: "-15px" }}>
            <div className="prize-left-line">
              <div className="prize-line"></div>
              <div className="prize-left-line-circle"></div>
            </div>
            <span style={{ minWidth: "70px", textAlign: "center" }}>
              22 მაისი
            </span>
            <div className="prize-right-line">
              <div className="prize-line"></div>
              <div className="prize-right-line-circle"></div>
            </div>
          </div>

          <PrizeCard cardName={"VW ID.4"} imgName={miniCar} />

          <PrizeCard cardName={"10 000"} imgName={miniCoin} />

          <PrizeCard cardName={"FREESPIN"} txtImg={"200"} />

          <PrizeCard cardName={"10 000"} imgName={miniCoin} />

          <PrizeCard cardName={"FREESPIN"} txtImg={"200"} />

          <div className="prize-lines-container" style={{bottom: "-15px"}}>
          <div className="prize-left-line">
            <div className="prize-line"></div>
            <div className="prize-left-line-circle"></div>
          </div>
          <span style={{minWidth: '70px', textAlign: 'center'}}>23 მაისი</span>
          <div className="prize-right-line">
            <div className="prize-line"></div>
            <div className="prize-right-line-circle"></div>
          </div>
        </div>
        </div>

        <div className="prizes-cards-container">

          <PrizeCard cardName={"VW ID.4"} imgName={miniCar} />

          <PrizeCard cardName={"10 000"} imgName={miniCoin} />

          <PrizeCard cardName={"FREESPIN"} txtImg={"200"} />

          <PrizeCard cardName={"10 000"} imgName={miniCoin} />

          <PrizeCard cardName={"FREESPIN"} txtImg={"200"} />
        </div>
      </div>

      <button className="seeAll-btn">ყველას ნახვა</button>
    </div>
  );
};

export default PrizeList;
