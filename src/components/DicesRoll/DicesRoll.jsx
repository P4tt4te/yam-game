import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from './../Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { rollDices } from './../../store/actions/actions-types';

const DicesRollTitle = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
`;

const DicesRollInput = styled.input`
  padding: 1.6rem;
  background-color: white;
  margin-bottom: 1.6rem;
  border-radius: 1.2rem;
  width: calc(100% - 3.2rem);
`;

const DicesRollScore = styled.section`
  margin-top: 1.6rem;
  font-size: 2rem;
`;

export const DicesRoll = () => {
  const [query, setQuery] = useState(1); // Default value

  const { results, score } = useSelector((state) => state.gameReducer);

  /* Create a newState after a dispatch */
  const dispatch = useDispatch();

  if (query > 20) {
    setQuery(0);
  }

  if (query == null) {
    setQuery(0);
  }

  return (
    <div className="DicesRoll">
      <DicesRollTitle>Game Screen</DicesRollTitle>
      <DicesRollInput
        type="number"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="How many rolls?"
        value={query}
        min="1"
        max="20"
        maxlength="2"
      />
      <Button
        name="Roll the dices!"
        onClick={() => dispatch(rollDices(query))}
      />
      <DicesRollScore>Score: {score}</DicesRollScore>
      <DicesRollScore>
        <ul>
          Results |
          {results.map((item, index) => (
            <span key={index}> {item} | </span>
          ))}
        </ul>
      </DicesRollScore>
    </div>
  );
};
