export const newGame = ({ players, word, id, image }) => {
    return {
        players,
        word,
        gameID: id,
        image,
        type: "NEW_GAME"
    };
};

export const startGame = (round) => {
    return {
        round,
        type: "START_GAME"
    };
};

export const playerReady = (ready) => {
    return {
        ready,
        type: "PLAYER_READY"
    };
};

export const saveRound = ({
    gameID,
    round,
    image_data,
    guess,
}) => {
    return {
        gameID,
        round,
        roundInputs: image_data || guess,
        type: "SAVE_ROUND"
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};
