import React from "react";
import { motion, useAnimation } from "framer-motion";

const disActiveBtn = {
  minWidth: "35px",
  minHeight: "35px",
  borderRadius: "50%",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};

const activeBtn = {
  minWidth: "35px",
  minHeight: "35px",
  borderRadius: "50%",
  border: "1px solid transparent",
  color: "white",
  background: "#303BA5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};

const QuestionsCard = ({ questionHeader, questionBody, isExpanded, onToggle }) => {
  const controls = useAnimation();
  const circleStyleState = isExpanded ? activeBtn : disActiveBtn;
  const bgState = isExpanded ? "#4D6AB8" : "transparent";

  React.useEffect(() => {
    controls.start({
      height: isExpanded ? "auto" : "50px",
    });
  }, [isExpanded, controls]);

  return (
    <motion.div
      initial={{ height: "50px" }}
      animate={controls}
      onClick={onToggle}
      className="questions-card"
      style={{ background: bgState }}
    >
      <div className="questions-header">
        <p>{questionHeader}</p>
        <div style={circleStyleState}>+</div>
      </div>
      <p>{questionBody}</p>
    </motion.div>
  );
};

export default QuestionsCard;
