import React from "react";
import PropTypes from "prop-types";

const ScoreCounter = ({ score }) => {
  return (
    <div className="score-container">
      <div className="options">
        <li>ROCK</li>
        <li>PAPER</li>
        <li>SCISSORS</li>
      </div>
      <div className="score">
        <p>Score</p>
        <p className="score-count">{score}</p>
      </div>
    </div>
  );
};

ScoreCounter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreCounter;
