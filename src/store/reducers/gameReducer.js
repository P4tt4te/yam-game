import { ROLL_DICES } from "../constants/actions";

/* Source of truth */
const gameState = {
  firstDiceResult: null,
  secondDiceResult: null,
  thirdDiceResult: null,
  leftRolls: 20,
  total: 0,
};

const reducer = (state = gameState, action = {}) => {
  switch (action.type) {
    case ROLL_DICES:

      return {
        ...state,
        // attribuer une valeur random à firstDice
        // attribuer une valeur random à secondDice
        // attribuer une valeur random à thirdDice
        
        // set total = la somme des résultats
      };

    default:
      return state;
  }
};

export default reducer;
