import { ROLL_DICES, ADD_GAME_HISTORY } from '../constants/actions';

/* Dispatch functions */
export const rollDices = (payload) => {
  return {
    type: ROLL_DICES,
    payload: payload,
  };
};

export const addGameHistory = (payload) => {
  return {
    type: ADD_GAME_HISTORY,
    payload: payload,
  };
};
