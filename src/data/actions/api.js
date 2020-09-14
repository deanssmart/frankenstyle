// import axios from '../../axios';
// import { saveSketch } from './state';

export const postSketch = (dataURL) => {
  return {
    dataURL,
    type: "SAVE_SKETCH",
  };
};

export const postPlayers = (players) => {
  return {
    players,
    type: "SAVE_PLAYERS",
  };
};
