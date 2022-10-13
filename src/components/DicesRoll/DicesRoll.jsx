import React from 'react';

export const DicesRoll = ({ dispatch, rollDices, total }) => {
  return (
    <div className="DicesRoll">
      <p>Lancez vos dés!</p>
      <button onClick={() => dispatch(rollDices())}>Roll Dices</button>
      <p>{total}</p>
    </div>
  );
};
