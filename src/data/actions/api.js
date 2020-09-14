// import axios from '../../axios';
// import { newGame } from './state';

export const postSketch = (round, dataURL) => {
    return {
        round,
        dataURL,
        type: "SAVE_SKETCH"
    }
}

export const postNewGame = (
    player1Name,
    player2Name,
    player3Name,
    player4Name,
) => {
    return {
        player1Name,
        player2Name,
        player3Name,
        player4Name,
        type: "NEW_GAME",
    }
}

// export const postNewGame = (
//     player1Name, 
//     player2Name,
//     player3Name,
//     player4Name, 
//     ) => {
//         return dispatch => {
//             axios.post('/', {
//               players: [player1Name, player2Name, player3Name, player4Name],
//             }).then(({ data }) => dispatch(newGame(data.data)));
//     };
// };


    export const postPlayers = (
        player1Name, 
        player2Name,
        player3Name,
        player4Name, 
        ) => {
            return {
                player1Name, 
                player2Name,
                player3Name,
                player4Name, 
                type: "SAVE_PLAYER"
            }
        };