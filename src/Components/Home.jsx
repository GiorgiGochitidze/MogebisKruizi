import "./CSS/home.css";
import logo from "../assets/logo.png";
import text from "../assets/text.png";
import userIcon from "../assets/userIcon.png";
import island from "../assets/island.png";
import lineForTimer from "../assets/lineForTimer.png";

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
        <svg
          style={{ position: "absolute" }}
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <circle
            style={{ opacity: "15%" }}
            cx="50"
            cy="50"
            r="48"
            fill="transparent"
            stroke="white"
            strokeWidth="0.3"
            strokeDasharray="2, 8"
          />

          <circle
            style={{ opacity: "15%" }}
            cx="50"
            cy="50"
            r="43"
            fill="transparent"
            stroke="white"
            strokeWidth="0.3"
          />

          <circle
            style={{ opacity: "15%" }}
            cx="50"
            cy="50"
            r="38"
            fill="transparent"
            stroke="white"
            strokeWidth="0.3"
          />

          <defs>
            <clipPath id="circleClip">
              <circle cx="50" cy="50" r="36" />
            </clipPath>

            <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#2AB4FF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#2AB4FF", stopOpacity: 1 }}
              />
            </linearGradient>

            <filter
              id="shadowFilter"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow dx="0" dy="7" stdDeviation="3" floodColor="blue" />
            </filter>
          </defs>

          <image
            xlinkHref={island}
            x="10"
            y="12"
            width="76"
            height="76"
            clipPath="url(#circleClip)"
            preserveAspectRatio="xMidYMid slice"
          />

          <foreignObject x="20" y="30" width="60" height="40">
            <p style={{ textAlign: "center", color: "white", fontSize: "2px" }}>
              გახსენი საჩუქრების ყუთი და მოიგე
            </p>
          </foreignObject>

          <foreignObject x="37" y="62" width="25" height="7">
            <button
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2px",
                border: 0,
                borderRadius: "20px",
                background: "linear-gradient(0deg, #17C7FE, #0792EF)",
                color: "white",
              }}
            >
              <span style={{ marginTop: "0.5px" }}>ბოთლის გახსნა</span>
            </button>
          </foreignObject>

          <line
            x1="30"
            y1="71"
            x2="70"
            y2="71"
            stroke="white"
            strokeWidth="0.2"
            style={{ opacity: "42%" }}
          />

          <foreignObject x="20" y="72" width="60" height="40">
            <p
              style={{ textAlign: "center", color: "white", fontSize: "1.5px" }}
            >
              ბონუს საჩუქარი
            </p>
          </foreignObject>

          <rect
            x="35"
            y="75"
            width="4"
            height="5"
            rx="1"
            fill="url(#myGradient)"
          />
          <text
            x="36"
            y="79"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            2
          </text>
          <image
            xlinkHref={lineForTimer}
            x="35"
            y="39.6"
            width="4.13"
            height="76"
          />

          <rect
            x="40"
            y="75"
            width="4"
            height="5"
            rx="1"
            fill="url(#myGradient)"
          />
          <text
            x="41"
            y="79"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            2
          </text>
          <image
            xlinkHref={lineForTimer}
            x="40"
            y="39.6"
            width="4.13"
            height="76"
          />

          <text
            x="38.2"
            y="81.5"
            fontSize="1.3px"
            style={{ fontFamily: "Arial, sans-serif", fill: "#B4CDFF" }}
          >
            დღე
          </text>

          <text
            x="44.5"
            y="78.7"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            :
          </text>

          <rect
            x="46"
            y="75"
            width="4"
            height="5"
            rx="1"
            fill="url(#myGradient)"
          />
          <text
            x="47"
            y="79"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            2
          </text>

          <image
            xlinkHref={lineForTimer}
            x="46"
            y="39.6"
            width="4.13"
            height="76"
          />

          <rect
            x="51"
            y="75"
            width="4"
            height="5"
            rx="1"
            fill="url(#myGradient)"
          />
          <text
            x="52"
            y="79"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            2
          </text>

          <image
            xlinkHref={lineForTimer}
            x="51"
            y="39.6"
            width="4.13"
            height="76"
          />

          <text
            x="48.8"
            y="81.8"
            fontSize="1.3px"
            style={{ fontFamily: "Arial, sans-serif", fill: "#B4CDFF" }}
          >
            საათი
          </text>

          <text
            x="55.4"
            y="79"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            :
          </text>

          <rect
            x="57"
            y="75"
            width="4"
            height="5"
            rx="1"
            fill="url(#myGradient)"
          />
          <text
            x="58"
            y="79"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            2
          </text>
          
          <image
            xlinkHref={lineForTimer}
            x="57"
            y="39.6"
            width="4.13"
            height="76"
          />

          <rect
            x="62"
            y="75"
            width="4"
            height="5"
            rx="1"
            fill="url(#myGradient)"
          />

          <text
            x="63"
            y="79"
            fontSize="4px"
            style={{ fontFamily: "Arial, sans-serif", fill: "white" }}
          >
            2
          </text>

          <image
            xlinkHref={lineForTimer}
            x="62"
            y="39.6"
            width="4.13"
            height="76"
            style={{ filter: "url(#shadowFilter)" }}
          />

          <text
            x="59.8"
            y="81.8"
            fontSize="1.3px"
            style={{ fontFamily: "Arial, sans-serif", fill: "#B4CDFF" }}
          >
            წუთი
          </text>
        </svg>
      </div>
    </main>
  );
};

export default Home;
