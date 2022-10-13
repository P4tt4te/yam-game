import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { rollDices } from './../store/actions/actions-types';

import { DicesRoll } from '../components/DicesRoll/DicesRoll';

const HomeViewContainer = styled.section`
  border-radius: 2rem;
  padding: 3.6rem;
  margin: 2rem;
  background-color: #edf5f1;
`;

export const HomeView = ({}) => {
  /* Access to the store, read-only */
  const { firstDiceResult, secondDiceResult, thirdDiceResult, total } =
    useSelector((state) => state.gameReducer);

  /* Create a newState after a dispatch */
  const dispatch = useDispatch();

  return (
    <HomeViewContainer>
      <DicesRoll
        dispatch={dispatch}
        rollDices={rollDices}
        firstDiceResult={firstDiceResult}
        secondDiceResult={secondDiceResult}
        thirdDiceResult={thirdDiceResult}
        total={total}
      />
    </HomeViewContainer>
  );
};
