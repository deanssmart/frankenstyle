import React from "react";

const EndScreen = ({ roundInput }) => {
  return (
    <>
      <div className="endScreen-container ">
        <div className="round1-result-container">
          <img alt="player-1-drawing" src={roundInput[0]} />
          <h2>{roundInput[1]}</h2>
        </div>

        <div className="round2-result-container">
          <img alt="player-2-drawing" src={roundInput[2]} />
          <h2>{roundInput[3]}</h2>
        </div>
      </div>
      <Button />
    </>
  );
};

export default EndScreen;
