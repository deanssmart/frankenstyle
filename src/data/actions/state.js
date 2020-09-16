export const newGame = ({
    players,
    word,
    id,
    image, 
}) => {
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

export const saveRound = ({
    gameID,
    round,
    imageData,
    guess,
}) => {
    return {
        gameID,
        round,
        roundInputs: imageData || guess,
        type: "SAVE_ROUND"
    };
};

// export const saveGuess = ({
//     gameID,
//     round,
//     imageData,
//     guess,
// }) => {
//     return {
//         gameID,
//         round,
//         dataURL: imageData,
//         guess,
//         type: "MAKE_GUESS"
//     };
// };