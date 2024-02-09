import React from "react";
import PropTypes from "prop-types";

import "../styles.css";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";
import Scissors from "../images/icon-scissors.svg";

const Results = ({ userChoice, houseChoice }) => {
  console.log("Results");
  console.log(userChoice);
  console.log(houseChoice);
  return (
    <div className="results-container">
      <div className="game-buttons">
        <div className="user">
          <div className={`icon-img ${userChoice}`}>
            {userChoice === "rock" && (
              <img src={Rock} alt="User's Choice" className="rock" />
            )}
            {userChoice === "paper" && (
              <img src={Paper} alt="User's Choice" className="paper" />
            )}
            {userChoice === "scissors" && (
              <img src={Scissors} alt="User's Choice" className="scissors" />
            )}
          </div>
          <h2>YOU PICKED</h2>
        </div>
        <div className="house">
          <div className={`icon-img ${houseChoice}`}>
            {houseChoice === "rock" && (
              <img src={Rock} alt="House's Choice" className="rock" />
            )}
            {houseChoice === "paper" && (
              <img src={Paper} alt="House's Choice" className="paper" />
            )}
            {houseChoice === "scissors" && (
              <img src={Scissors} alt="House's Choice" className="scissors" />
            )}
          </div>
          <h2>THE HOUSE PICKED</h2>
        </div>
      </div>
    </div>
  );
};
Results.propTypes = {
  userChoice: PropTypes.oneOf(["rock", "paper", "scissors"]).isRequired,
  houseChoice: PropTypes.oneOf(["rock", "paper", "scissors"]).isRequired,
};
export default Results;
