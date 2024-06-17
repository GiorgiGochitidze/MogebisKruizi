import "./CSS/home.css";
import logo from "../assets/logo.png";
import text from "../assets/text.png";
import userIcon from "../assets/userIcon.png";
import IslandImageSVG from "./IslandImageSVG";

const Home = () => {
  return (
    <main>
      <div className="car-image-container">
        <div className="logo-image-container">
          <img className="logo-image" src={logo} alt="Logo" />
          <p style={{ marginBlock: "5px" }}>
            Შემოუერთდი ყველაზე მომგებიან <br /> თავგადასავალს
          </p>
          <img
            className="underLogo-text"
            src={text}
            alt="under logo text img"
          />
        </div>
      </div>

      <div className="authorization-container">
        <div className="time-container">
          <div style={{ textAlign: "center" }}>
            <div style={{ backgroundColor: "#25704C" }} className="time-circle">
              1აპრ. 02:20
            </div>
            <span style={{ marginTop: "10px" }}>დაწყება</span>
          </div>

          <hr />

          <div style={{ textAlign: "center" }}>
            <div style={{ backgroundColor: "#7B353A" }} className="time-circle">
              1აპრ. 02:20
            </div>
            <span style={{ marginTop: "10px" }}>დასრულება</span>
          </div>
        </div>

        <div className="miniAuth-container">
          <div className="user-container">
            <img
              style={{ marginTop: "15px" }}
              src={userIcon}
              alt="user yellow icon"
            />
          </div>
          <p style={{ textAlign: "center" }}>
            ბილეთების სანახავად გთხოვთ გაიაროთ ავტორიზაცია
          </p>

          <button className="auth-btn">ავტორიზაცია</button>
        </div>
      </div>

      <div className="open-bottle-container">
        <IslandImageSVG />
      </div>
    </main>
  );
};

export default Home;
