import React from "react";
import Button from "../Button/Button";

const EndScreen = ({ roundInputs, handleReset }) => {
  return (
    <>
      <div className="endScreen-container ">
        <div className="round-result-container">
          <img alt="player-1-drawing" src={roundInputs[0]} />
          <h2>{roundInputs[1]}</h2>
        </div>

        <div className="round-result-container">
          <img alt="player-2-drawing" src={roundInputs[2]} />
          <h2>{roundInputs[3]}</h2>
        </div>
      </div>
      <Button label="New Game" buttonClass="button" handleClick={handleReset} />
    </>
  );
};

export default EndScreen;
