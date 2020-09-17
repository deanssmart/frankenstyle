import axios from '../../axios';
import { newGame } from './state';
import { saveRound } from './state';

export const postNewGame = (
    player1Name,
    player2Name,
    player3Name,
    player4Name,
) => {
    return dispatch => {
        axios.post('/', {
            player1: player1Name,
            player2: player2Name,
            player3: player3Name,
            player4: player4Name,
        }).then(({ data }) => dispatch(newGame(data.data)));
    };
};

export const postSketch = (round, imageData) => {
    return (dispatch, getState) => {
        const id = getState().gameID;
        axios.post(`${id}`, {
            round,
            image_data: imageData,
        }).then(({ data }) => dispatch(saveRound(data.data)));
    };
};

export const postGuess = (round, guess) => {
    return (dispatch, getState) => {
        const id = getState().gameID;
        axios.post(`${id}`, {
            round,
            guess,
        }).then(({ data }) => dispatch(saveRound(data.data)));
    };
};
