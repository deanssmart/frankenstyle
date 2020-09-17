import React from "react";
import Button from "../Button/Button";

const EndScreen = ({ roundInputs, handleReset }) => {
  return (
    <>
      <div className="container-global">
        <div className="container-endscreen">
          <div className="container-card-grid-endscreen card-grid-endscreen-sketch1">
            <img
              className="img-card img-card-round-background"
              alt="player-1-drawing"
              src={roundInputs[0]}
            />
            <p>{roundInputs[1]}</p>
          </div>

          <div className="container-card-grid-endscreen card-grid-endscreen-sketch2">
            <img
              className="img-card img-card-round-background"
              alt="player-2-drawing"
              src={roundInputs[2]}
            />
            <p>{roundInputs[3]}</p>
          </div>

          <Button
            label="New Game"
            buttonClass="button button-newgame"
            handleClick={handleReset}
          />
        </div>
      </div>
    </>
  );
};

export default EndScreen;
