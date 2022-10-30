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
      let newResults = [];

      for (let i = 0; i < action.payload; i++) {
        let roundResult = rolls();
        newScore = newScore + roundResult.score;
        newResults.push({
          results: roundResult.results,
          message: roundResult.message,
        });
      }

      return {
        ...state,

        score: newScore,
        results: newResults,
      };

    default:
      return state;
  }
};

export default reducer;
