import { ROLL_DICES } from '../constants/actions';

/* Source of truth */
const gameState = {
  firstDiceResult: null,
  secondDiceResult: null,
  thirdDiceResult: null,
  fourthDiceResult: null,
  fifthDiceResult: null,
  result: 0,
  score: 0,
  combo: null,
};

const reducer = (state = gameState, action = {}) => {
  switch (action.type) {
    case ROLL_DICES:
      let newScore = state.score;

      /* Set a random value for each dice roll */
      const values = [];
      for (let i = 0; i < 5; i++) {
        values[i] = Math.floor(Math.random() * 6) + 1;
      }

      /* Set scoring conditions */
      function haveSameItems(arr, n) {
        let sameNumbers = 0;

        arr.forEach((elmt) => {
          if (elmt == n) {
            sameNumbers++;
          }
        });

        return sameNumbers;
      }

      const numbersOfSameItems = [
        haveSameItems(values, 1),
        haveSameItems(values, 2),
        haveSameItems(values, 3),
        haveSameItems(values, 4),
        haveSameItems(values, 5),
        haveSameItems(values, 6),
      ];

      numbersOfSameItems.forEach((nb) => {
        if (nb == 5) {
          /* Yam's */
          console.log("Yam's, + 1000 points");
          newScore = newScore + 1000;
        }

        if (nb == 4) {
          /* Square */
          console.log('Square, + 400 points');
          newScore = newScore + 400;
        }

        if (nb == 3) {
          /* Brelan */
          console.log('Brelan, + 100 points');
          newScore = newScore + 100;
        } else {
          /* Nothing */
          newScore = newScore;
        }
      });

      return {
        ...state,

        /* Set a random value for each result */
        firstDiceResult: values[0],
        secondDiceResult: values[1],
        thirdDiceResult: values[2],
        fourthDiceResult: values[3],
        fifthDiceResult: values[4],

        /* Update result */
        result: values[0] + values[1] + values[2] + values[3] + values[4],

        /* Set the score */
        score: newScore,
      };

    default:
      return state;
  }
};

export default reducer;
