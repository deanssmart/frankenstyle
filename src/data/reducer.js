const newGameReducer = (state, {
  gameID,
  word,
  player1Name, 
  player2Name,
  player3Name,
  player4Name,
}) => {
  return {
    ...state,
    gameID,
    word,
    player1Name,
    player2Name, 
    player3Name, 
    player4Name,
    round: 1,
  }
}

const saveRoundReducer = (state, { round, roundInputs }) => {
  return {
    ...state,
    round: round + 1,
    roundInputs: [...state.roundInputs, roundInputs],   
  };
};

// const makeGuessReducer = (state, { round, guess }) => {
//   return {
//     ...state,
//     round: round + 1,
//     guess,
//   }
// }



const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME": return newGameReducer(state, action);
    case "SAVE_ROUND": return saveRoundReducer(state, action);
    // case "MAKE_GUESS": return makeGuessReducer(state, action);
    default: return state;
  };
};

export default reducer;
