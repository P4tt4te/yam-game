import { ROLL_DICES } from '../constants/actions';

/* Source of truth */
const gameState = {
  firstDiceResult: null,
  secondDiceResult: null,
  thirdDiceResult: null,
  total: 0,
};

const reducer = (state = gameState, action = {}) => {
  switch (action.type) {
    case ROLL_DICES:
      console.log('Dices have been rolled', state);

      /* Set a random value for each roll */
      let value1 = Math.floor(Math.random() * 6) + 1;
      let value2 = Math.floor(Math.random() * 6) + 1;
      let value3 = Math.floor(Math.random() * 6) + 1;

      return {
        ...state,

        /* Set a random value for each result */
        firstDiceResult: value1,
        secondDiceResult: value2,
        thirdDiceResult: value3,

        /* Set total */
        total:
          value1 +
          value2 +
          value3,
      };

    default:
      return state;
  }
};

export default reducer;
