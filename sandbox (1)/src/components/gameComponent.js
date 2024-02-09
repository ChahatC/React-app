import React, { useState, useEffect } from "react";
import "../styles.css";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";
import Scissors from "../images/icon-scissors.svg";
import ScoreCounter from "./score.js";
import Results from "./results.js";
import Button from "@mui/material/Button";

const Gamecomponent = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [chosenName, setChosenName] = useState("");

  // Array of options
  const names = ["paper", "scissors", "rock"];

  // Function to choose a random option
  const chooseRandomOption = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  // Set initial chosenName on component mount
  useEffect(() => {
    setChosenName(chooseRandomOption());
  }, []);

  const handleScoreUpdate = (event) => {
    let className = event.target.className;
    console.log(className);
    // Get the class name of the clicked div
    className = className.replace(/\bicon-img\b/g, "").trim();
    setSelectedOption(className);

    // Update score based on the class name
    if (
      (className.includes("paper") && chosenName === "rock") ||
      (className.includes("rock") && chosenName === "scissors") ||
      (className.includes("scissors") && chosenName === "paper")
    ) {
      setScore(score + 1);
      setResult("Win"); // Increment score for a win
    } else if (
      (className.includes("rock") && chosenName === "paper") ||
      (className.includes("scissors") && chosenName === "rock") ||
      (className.includes("paper") && chosenName === "scissors")
    ) {
      setScore(score - 1);
      setResult("Lose"); // Decrement score for a loss
    } else {
      setResult("Draw"); // Draw
    }
  };

  const resetGame = () => {
    setSelectedOption(null);
    setChosenName(chooseRandomOption()); // Choose a new random option
    setResult(null); // Reset result
  };

  if (selectedOption) {
    console.log(selectedOption);
    console.log("optio");
    return (
      <div>
        <ScoreCounter score={score} />
        <Results userChoice={selectedOption} houseChoice={chosenName} />
        <h2>Result: {result}</h2>

        <Button
          variant="outlined"
          onClick={resetGame}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            fontSize: 18,
            "&:hover": { borderColor: "#fff" },
          }}
        >
          Play Again
        </Button>
      </div>
    ); // Hide the component if an option is selected
  }

  return (
    <div>
      <ScoreCounter score={score} />
      <div className="game-container">
        <div className="game-buttons">
          <div className="icon-img paper" onClick={handleScoreUpdate}>
            <img src={Paper} alt="Paper" className="paper" />
          </div>
          <div className="icon-img scissors" onClick={handleScoreUpdate}>
            <img src={Scissors} alt="Scissors" className="scissors" />
          </div>
          <div className="icon-img rock" onClick={handleScoreUpdate}>
            <img src={Rock} alt="Rock" className="rock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamecomponent;
