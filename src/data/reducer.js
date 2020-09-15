const saveSketchReducer = (state, { round, dataURL }) => {
  return {
    ...state,
    round: round + 1,
    dataURL,
  };
};

const newGameReducer = (state, {
  player1Name, 
  player2Name,
  player3Name,
  player4Name, 
}) => {
  return {
    ...state,
    player1Name,
    player2Name, 
    player3Name, 
    player4Name,
    round: 1,
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_SKETCH": return saveSketchReducer(state, action);
    case "NEW_GAME": return newGameReducer(state, action);
    default: return state;
  };
};

export default reducer;
