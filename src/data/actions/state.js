export const newGame = ({
    players,
    word,
    id, 
}) => {
        return {
           gameID: id,
           word,
           players, 
           type: "NEW_GAME"
        }
    };