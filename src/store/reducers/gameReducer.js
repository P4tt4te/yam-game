import { ROLL_DICES } from '../constants/actions';
import { rolls } from '../helpers/rolls';

/* Source of truth */
const gameState = {
  score: 0,
  results: [],
};

const reducer = (state = gameState, action = {}) => {
  switch (action.type) {
    case ROLL_DICES:
      let newScore = 0;

      for (let i = 0; i < action.payload; i++) {
        let roundScore = rolls().score; // returns a score
        newScore = newScore + roundScore;
      }

      let displayedResults = rolls().values;

      console.log("======");

      return {
        ...state,

        /* Set the score */
        score: newScore,
        results: displayedResults,
      };

    default:
      return state;
  }
};

export default reducer;
