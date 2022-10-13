import React from 'react';
import styled from 'styled-components';

import { Button } from './../Button/Button';

const DicesRollTitle = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
`;

const DicesRollScore = styled.section`
  margin-top: 1.6rem;
  font-size: 2rem;
`;

export const DicesRoll = ({ dispatch, rollDices, score, result }) => {
  return (
    <div className="DicesRoll">
      <DicesRollTitle>Game Screen</DicesRollTitle>
      <input type="number" placeholder='How many rolls?' />
      <Button name="Roll the dices!" onClick={() => dispatch(rollDices())} />
      <DicesRollScore>Result: {result}</DicesRollScore>
      <DicesRollScore>Score: {score}</DicesRollScore>
    </div>
  );
};
