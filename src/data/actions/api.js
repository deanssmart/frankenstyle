// import axios from '../../axios';
import { newGame } from './state';
import { postNewGameData } from '../json/postNewGame.json';

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
    };
};

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

export const postSketch = (round, dataURL) => {
    return {
        round,
        dataURL,
        type: "SAVE_SKETCH"
    };
};

// export const postSketch = (round, dataURL) => {
//     return (dispatch, getState) => {         
//        const id = getState().gameID;
//        axios.post(`${id}/round`, { 
//             round, 
//             dataURL,
//         }).then(({ data }) => dispatch(saveSketch(data.data))); 
//     };
// };

export const postGuess = (round, guess) => {
    return {
        round,
        guess,
        type: "MAKE_GUESS"
    };
};