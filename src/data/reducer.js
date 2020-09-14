const saveSketchReducer = (state, { dataURL }) => {
  return {
    ...state,
    dataURL,
  };
};
const savePlayerReducer = (state, { players }) => {
  return {
    ...state,
    players,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_SKETCH":
      return saveSketchReducer(state, action);
    case "SAVE_PLAYER":
      return savePlayerReducer(state, action);
    default:
      return state;
  }
};

export default reducer;
