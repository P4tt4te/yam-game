import { ROLL_DICES, ADD_GAME_HISTORY } from '../constants/actions';

/* Dispatch functions */
export const rollDices = () => {
  return {
    type: ROLL_DICES,
  };
};

export const addGameHistory = (payload) => {
  return {
    type: ADD_GAME_HISTORY,
    payload: payload,
  };
};
