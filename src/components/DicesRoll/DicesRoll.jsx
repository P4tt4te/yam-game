import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from './../Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { addGameHistory, rollDices } from './../../store/actions/actions-types';

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
  const [history, setHistory] = useState(false);

  /* Create a newState after a dispatch */
  const dispatch = useDispatch();

  /* Handle input completion */
  if (query > 20) {
    setQuery(1);
  }

  const handleGame = () => {
    dispatch(rollDices(query));
    setHistory(true);
  };

  useEffect(() => {
    if (history) {
      dispatch(
        addGameHistory({
          tryLength: query,
          brelan: 1,
          score: score,
        })
      );
    }
    setHistory(false);
  }, [history]);

  return (
    <div className="DicesRoll">
      <DicesRollTitle>Game Screen</DicesRollTitle>
      <DicesRollInput
        type="number"
        max="20"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="How many rolls?"
        value={query}
      />
      <Button name="Roll the dices!" onClick={handleGame} />
      <DicesRollScore>Score: {score}</DicesRollScore>
      <DicesRollScore>
        <ul>
          {/* {console.log(score)} */}
          Results |
          {results.map((item, index) => (
            <span key={index}> {item} | </span>
          ))}
        </ul>
      </DicesRollScore>
    </div>
  );
};
