import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const StatsViewContainer = styled.section`
  border-radius: 2rem;
  padding: 3.6rem;
  margin: 2rem;
  background-color: #edf5f1;
`;

const StatsViewTitle = styled.h1`
  font-size: 3.2rem;
  font-variation-settings: 'wght' 700;
`;

const StatsViewSubtitle = styled.h2`
  font-size: 1.6rem;
  margin: 3.2rem 0 1.6rem 0;
  font-variation-settings: 'wght' 600;
`;

export const StatsView = () => {
  const { history } = useSelector((state) => state.gameHistoryReducer);
  const dispatch = useDispatch();

  return (
    <StatsViewContainer>
      <StatsViewTitle>Your stats 📊</StatsViewTitle>
      <StatsViewSubtitle>history of your games</StatsViewSubtitle>
      <div>
        <h3>Scoring :</h3>
        <p>Brelan = 100 points</p>
      </div>
      <div>
        {history.length > 0 ? (
          history.map((game, key) => (
            <div key={key}>
              <p># {key + 1}</p>
              <p>Nombre de lancer : {game.tryLength}</p>
              <p>Nombre de brelan : {game.brelan}</p>
              <p>Score : {game.score}</p>
            </div>
          ))
        ) : (
          <p>History clear.</p>
        )}
      </div>
    </StatsViewContainer>
  );
};
