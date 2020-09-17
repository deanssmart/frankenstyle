import React from "react";
import Button from "../Button/Button";

const EndScreen = ({ word, image, roundInputs, handleReset, players }) => {
  return (
    <>
      <div className="container-global">
        <div className="container-endscreen">
          <div className="shadow">
            <div className="container-card-grid-endscreen card-grid-endscreen-original">
              <img
                className="img-card img-card-round-background"
                alt={word}
                src={image}
              />
              <div className="card-lower">
                <p className="card-word card-lower-elements">{word}</p>
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="container-card-grid-endscreen card-grid-endscreen-sketch1">
              <img
                className="img-card img-card-round-background"
                alt="player-1-drawing"
                src={roundInputs[0]}
              />
              <div className="card-lower">
                <p className="card-word card-lower-elements endscreen-card-text">
                  <span>{players[1]} </span>
                  <span>Guessed:</span>
                  <span>{roundInputs[1]}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="container-card-grid-endscreen card-grid-endscreen-sketch2">
              <img
                className="img-card img-card-round-background"
                alt="player-2-drawing"
                src={roundInputs[2]}
              />
              <div className="card-lower">
                <p className="card-word card-lower-elements endscreen-card-text">
                  <span>{players[3]} </span>
                  <span>Guessed:</span>
                  <span>{roundInputs[3]}</span>
                </p>
              </div>
            </div>
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
