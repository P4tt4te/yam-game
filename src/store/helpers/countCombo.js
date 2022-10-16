import { BRELAN, SQUARE, YAMS } from './rolls';

export const countCombo = (results) => {
  let brelan = 0;
  let square = 0;
  let yams = 0;

  results.forEach((result) => {
    if (result.message === BRELAN) {
      brelan++;
    } else if (result.message === SQUARE) {
      square++;
    } else if (result.message === YAMS) {
      yams++;
    }
  });

  return { brelan, square, yams };
};
