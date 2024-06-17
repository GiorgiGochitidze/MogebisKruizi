import "./CSS/prizelist.css";
import waveRect from "../assets/waveRect.png";

const PrizeCard = ({ imgName, cardName, txtImg }) => {
  return (
    <div className="prizes-card">
      {imgName && <img src={imgName} alt={imgName} />}

      {txtImg && <p className="txtImg">{txtImg}</p>}

      <p className="desc">{cardName}</p>
      <img
        className="prizes-card-img"
        src={waveRect}
        alt="waved rectangle bottom part for cards"
      />
    </div>
  );
};

export default PrizeCard;
