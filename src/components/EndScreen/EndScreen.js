import React from "react";
import Button from "../Button/Button";

const EndScreen = ({ word, image, roundInputs, handleReset }) => {

  return (
    <>
<<<<<<< HEAD
      <div className="endScreen-container ">
        <div className="round-result-container">
          <h1>{word}</h1>
          <img alt={word} src={image} />
        </div>

        <div className="round-result-container">
          <img alt="player-1-drawing" src={roundInputs[0]} />
          <h2>{roundInputs[1]}</h2>
        </div>
=======
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
>>>>>>> layout-css

          <Button
            label="New Game"
            buttonClass="button button-newgame"
            handleClick={handleReset}
          />
        </div>
      </div>
<<<<<<< HEAD

      <Button
        label="New Game"
        buttonClass="button button-padding"
        handleClick={handleReset}
      />
=======
>>>>>>> layout-css
    </>
  );
};

export default EndScreen;
