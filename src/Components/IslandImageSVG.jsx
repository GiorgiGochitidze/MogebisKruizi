import island from "../assets/island.png";
import lineForTimer from "../assets/lineForTimer.png";

const IslandImageSVG = () => {
  return (
    <svg
      style={{ position: "absolute" }}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <image
        xlinkHref={island}
        x="10"
        y="12"
        width="76"
        height="76"
        clipPath="url(#circleClip)"
        preserveAspectRatio="xMidYMid slice"
        style={{ zIndex: "1" }}
      />
      {/* cx="18" */}
      <ellipse
        cx="18"
        cy="24"
        rx="8"
        ry="7"
        r="8"
        fill="#303BA4"
        style={{ zIndex: "2" }}
      />
      <ellipse
        cx="71"
        cy="19"
        rx="4"
        ry="4"
        r="8"
        fill="#303BA4"
        style={{ zIndex: "2" }}
      />
      <ellipse
        cx="89"
        cy="50"
        rx="6"
        ry="7"
        r="8"
        fill="#303BA4"
        style={{ zIndex: "2" }}
      />

      <ellipse
        cx="76"
        cy="77"
        rx="5"
        ry="5"
        r="8"
        fill="#303BA4"
        style={{ zIndex: "2" }}
      />

      <ellipse
        cx="26"
        cy="79"
        rx="4"
        ry="4"
        r="8"
        fill="#303BA4"
        style={{ zIndex: "2" }}
      />

      <ellipse
        cx="14"
        cy="66"
        rx="5"
        ry="6"
        r="8"
        fill="#303BA4"
        style={{ zIndex: "2" }}
      />

      <circle
        style={{ opacity: "15%", zIndex: "3" }}
        cx="50"
        cy="50"
        r="48"
        fill="transparent"
        stroke="white"
        strokeWidth="0.3"
        strokeDasharray="2, 8"
        // mask="url(#circleMask)"
      />

      <circle
        style={{ opacity: "15%", zIndex: "3" }}
        cx="50"
        cy="50"
        r="43"
        fill="transparent"
        stroke="white"
        strokeWidth="0.3"
        // mask="url(#circleMask)"
      />

      <circle
        style={{ opacity: "15%", zIndex: "3" }}
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke="white"
        strokeWidth="0.3"
        // mask="url(#circleMask)"
      />

      <defs>
        <clipPath id="circleClip">
          <circle cx="50" cy="50" r="36" />
        </clipPath>

        <mask id="circleMask">
          <image xlinkHref={island} x="10" y="12" width="76" height="76" />
        </mask>

        <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2AB4FF", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#2AB4FF", stopOpacity: 1 }}
          />
        </linearGradient>

        <filter id="shadowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="7" stdDeviation="3" floodColor="blue" />
        </filter>
      </defs>

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
        <p style={{ textAlign: "center", color: "white", fontSize: "1.5px" }}>
          ბონუს საჩუქარი
        </p>
      </foreignObject>

      <rect x="35" y="75" width="4" height="5" rx="1" fill="url(#myGradient)" />
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

      <rect x="40" y="75" width="4" height="5" rx="1" fill="url(#myGradient)" />
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

      <rect x="46" y="75" width="4" height="5" rx="1" fill="url(#myGradient)" />
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

      <rect x="51" y="75" width="4" height="5" rx="1" fill="url(#myGradient)" />
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

      <rect x="57" y="75" width="4" height="5" rx="1" fill="url(#myGradient)" />
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

      <rect x="62" y="75" width="4" height="5" rx="1" fill="url(#myGradient)" />

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
  );
};

export default IslandImageSVG;
