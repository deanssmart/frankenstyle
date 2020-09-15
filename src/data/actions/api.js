// import axios from '../../axios';
import { newGame } from './state';
import { saveSketch } from './state';
import { saveGuess } from './state';
import postNewGameData from '../json/postNewGame.json';
import postSketchData from '../json/postSketchData.json';
import postGuessData from '../json/postGuessData.json';

export const postNewGame = (
    player1Name, 
    player2Name,
    player3Name,
    player4Name, 
    ) => {
        return dispatch => {
             dispatch(newGame(postNewGameData));
    };
};

// export const postNewGame = (
//     player1Name, 
//     player2Name,
//     player3Name,
//     player4Name, 
//     ) => {
//         return dispatch => {
//             axios.post('/games', {
//               players: [player1Name, player2Name, player3Name, player4Name],
//             }).then(({ data }) => dispatch(newGame(data.data)));
//     };
// };

export const postSketch = (round, dataURL) => {
    return dispatch => {         
       dispatch(saveSketch(postSketchData)); 
    };
};

// export const postSketch = (round, dataURL) => {
//     return (dispatch, getState) => {         
//        const id = getState().gameID;
//        axios.post(games/rounds, { 
//             gameID,
//             round, 
//             dataURL,
//         }).then(({ data }) => dispatch(saveSketch(data.data))); 
//     };
// };

export const postGuess = (round, dataURL) => {
    return dispatch => {         
       dispatch(saveGuess(postGuessData)); 
    };
};

// export const postGuess = (round, dataURL) => {
//     return (dispatch, getState) => {         
//        const id = getState().gameID;
//        axios.post(games/rounds, { 
//             gameID,
//             round, 
//             dataURL,
//         }).then(({ data }) => dispatch(saveGuess(data.data))); 
//     };
// };
