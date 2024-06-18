import React, { useState } from "react";
import "./CSS/questions.css";
import QuestionsCard from "./QuestionsCard";
import questions from './QuestionsArray.js'

const Questions = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="questions-container">
      {questions.map((question, index) => (
        <QuestionsCard
          key={index}
          questionBody={question.questionBody}
          questionHeader={question.questionHeader}
          isExpanded={expandedCard === index}
          onToggle={() => setExpandedCard(expandedCard === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Questions;
