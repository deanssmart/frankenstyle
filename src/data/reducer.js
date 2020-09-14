const saveSketchReducer = (state, { dataURL }) => {
    return {    
        ...state,    
        dataURL,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE_SKETCH": return saveSketchReducer(state, action);
        default: return state;
    };
};

export default reducer;