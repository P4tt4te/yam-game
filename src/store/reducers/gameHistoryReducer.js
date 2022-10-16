import { ADD_GAME_HISTORY } from '../constants/actions';

/* Source of truth */
const gameHistoryState = {
  money: 0,
  history: [],
};

const reducer = (state = gameHistoryState, action = {}) => {
  switch (action.type) {
    case ADD_GAME_HISTORY:
      const history = [...state.history];
      history.push(action.payload);

      let score = action.payload.score;


      return {
        ...state,
        money : state.money + score / 100,
        history,
      };

    default:
      return state;
  }
};

export default reducer;
