export const newGame = ({ players, word, id }) => {
  return {
    gameID: id,
    word,
    player1Name: players[0],
    player2Name: players[1],
    player3Name: players[2],
    player4Name: players[3],
    type: "NEW_GAME",
  };
};

export const saveSketch = ({ gameID, round, imageData, guess }) => {
  return {
    gameID,
    round,
    dataURL: imageData,
    guess,
    type: "SAVE_SKETCH",
  };
};

export const saveGuess = ({ gameID, round, imageData, guess }) => {
  return {
    gameID,
    round,
    dataURL: imageData,
    guess,
    type: "MAKE_GUESS",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
