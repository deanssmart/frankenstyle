import initial from "./initial";

const newGameReducer = (
  state,
  { gameID, word, player1Name, player2Name, player3Name, player4Name }
) => {
  return {
    ...state,
    gameID,
    word,
    player1Name,
    player2Name,
    player3Name,
    player4Name,

    round: 1,
  };
};

const saveSketchReducer = (state, { round, dataURL }) => {
  return {
    ...state,
    round: round + 1,
    dataURL,
  };
};

const makeGuessReducer = (state, { round, guess }) => {
  return {
    ...state,
    round: round + 1,
    guess,
  };
};

// const resetReducer = (state) => {
//   return { initial };
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return newGameReducer(state, action);
    case "SAVE_SKETCH":
      return saveSketchReducer(state, action);
    case "MAKE_GUESS":
      return makeGuessReducer(state, action);
    case "RESET":
      return initial;
    default:
      return state;
  }
};

export default reducer;
