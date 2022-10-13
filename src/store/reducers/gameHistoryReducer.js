import { ADD_GAME_HISTORY } from '../constants/actions';

/* Source of truth */
const gameHistoryState = {
  money: 0,
  history: [
    {
      tryLength: 100,
      brelan: 3,
      score: 300,
    },
    {
        tryLength: 100,
        brelan: 10,
        score: 300,
      },
  ],
};

const reducer = (state = gameHistoryState, action = {}) => {
  switch (action.type) {
    case ADD_GAME_HISTORY:
      const history = [...state.history];
      history.push(action.payload);

      return {
        ...state,
        history,
      };

    default:
      return state;
  }
};

export default reducer;
