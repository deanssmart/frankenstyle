const saveSketchReducer = (state, { dataURL }) => {
  return {
    ...state,
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


// const savePlayerReducer = (state, { players }) => {
//   return {
//     ...state,
//     players,
//   };
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_SKETCH": return saveSketchReducer(state, action);
    case "NEW_GAME": return newGameReducer(state, action);
    // case "SAVE_PLAYER": return savePlayerReducer(state, action);
    default: return state;
  };
};

export default reducer;
