import initial from './initial';

const newGameReducer = (state, { gameID, word, players, image }) => {
  return {
    ...state,
    gameID,
    word,
    players,
    image,
    started: true,
  };
};

const startGameReducer = (state, { round }) => {
  return {
    ...state,
    round: round + 1.
  };
};

const saveRoundReducer = (state, { round, roundInputs }) => {
  return {
    ...state,
    round: round + 1,
    roundInputs: [...state.roundInputs, roundInputs],   
  };
};

const resetReducer = (state) => {
  return { ...initial };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME": return newGameReducer(state, action);
    case "START_GAME": return startGameReducer(state, action);
    case "SAVE_ROUND": return saveRoundReducer(state, action);
    case "RESET": return resetReducer(state);
    default: return state;
  };
};

export default reducer;
