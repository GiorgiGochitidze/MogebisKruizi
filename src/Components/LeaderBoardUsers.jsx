import miniUserIcon from "../assets/miniUserIcon.png";
import { GiPresent } from "react-icons/gi";
import "./CSS/leaderboard.css";

const LeaderBoardUsers = ({ userName, score, prizeName, position }) => {
  return (
    <div className="users-list">
      <div className="userList-startPart" style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            className="labels"
            htmlFor="score"
            style={{ textAlign: "center", marginLeft: "10px" }}
          >
            პოზიცია
          </label>
          <span className="position-num">
            <span className="placeSymbol">#</span>{position}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            className="labels"
            htmlFor="score"
            style={{ textAlign: "center" }}
          >
            მომხმარებელი
          </label>
          <div className="profile">
            <div className="user-img">
              <img src={miniUserIcon} alt="miniUserIcon" />
            </div>
            <p>{userName}</p>
          </div>
        </div>
      </div>
      <div className="half-line" style={{ width: "65%", display: 'none', background: "#4350BF", height: "2px" }}></div>
      <div
        className="userList-lastPart"
        style={{ display: "flex", gap: "110px" }}
      >
        <div
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            className="labels"
            htmlFor="score"
            style={{ textAlign: "center" }}
          >
            ლიდერ ქულა
          </label>
          <div name="score" className="score">
            {score}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            className="labels"
            htmlFor="prize"
            style={{ textAlign: "center" }}
          >
            პრიზი
          </label>
          <div name="prize" className="prize">
            <GiPresent style={{ marginTop: "-5px" }} size={25} color="white" />{" "}
            <span>{prizeName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardUsers;
