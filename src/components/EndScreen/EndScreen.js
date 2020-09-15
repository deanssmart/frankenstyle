import React from "react";
import Button from "../Button/Button";
const EndScreen = ({ roundInput, handleReset }) => {
  return (
    <>
      <div className="endScreen-container ">
        <div className="round-result-container">
          <img alt="player-1-drawing" src={roundInput[0]} />

          <h2>{roundInput[1]}</h2>
        </div>

        <div className="round-result-container">
          <img alt="player-2-drawing" src={roundInput[2]} />
          <h2>{roundInput[3]}</h2>
        </div>
      </div>
      <Button
        label="Reset"
        className="button button-reset"
        onClick={handleReset}
      />
    </>
  );
};

export default EndScreen;
