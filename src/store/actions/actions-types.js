import { ROLL_DICES } from "../constants/actions";

/* Dispatch functions */
export const rollDices = () => {
  return {
    type: ROLL_DICES,
  };
};
