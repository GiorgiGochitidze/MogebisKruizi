import "./CSS/home.css";
import logo from "../assets/logo.png";
import text from "../assets/text.png";
import userIcon from "../assets/userIcon.png";
import island from "../assets/island.png";

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
              <circle cx="50" cy="50" r="35" />
            </clipPath>
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
              <span style={{ marginTop: "1px" }}>ბოთლის გახსნა</span>
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

          <rect x="35" y="75" width="4" height="5" rx="1" fill="#17C7FE" />
          <text x="36" y="79" fontSize="4px" style={{ fontFamily: 'Arial, sans-serif', fill: 'white' }}>
            2
          </text>

          <rect x="40" y="75" width="4" height="5" rx="1" fill="#17C7FE" />
          <text x="41" y="79" fontSize="4px" style={{ fontFamily: 'Arial, sans-serif', fill: 'white' }}>
            2
          </text>

          <rect x="46" y="75" width="4" height="5" rx="1" fill="#17C7FE" />
          <text x="47" y="79" fontSize="4px" style={{ fontFamily: 'Arial, sans-serif', fill: 'white' }}>
            2
          </text>

          <rect x="51" y="75" width="4" height="5" rx="1" fill="#17C7FE" />
          <text x="52" y="79" fontSize="4px" style={{ fontFamily: 'Arial, sans-serif', fill: 'white' }}>
            2
          </text>

          <rect x="57" y="75" width="4" height="5" rx="1" fill="#17C7FE" />
          <text x="58" y="79" fontSize="4px" style={{ fontFamily: 'Arial, sans-serif', fill: 'white' }}>
            2
          </text>

          <rect x="62" y="75" width="4" height="5" rx="1" fill="#17C7FE" />
          <text x="63" y="79" fontSize="4px" style={{ fontFamily: 'Arial, sans-serif', fill: 'white' }}>
            2
          </text>
        </svg>
      </div>
    </main>
  );
};

export default Home;
