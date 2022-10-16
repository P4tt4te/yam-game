import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { countCombo } from '../store/helpers/countCombo';

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

const StatsViewCardContainer = styled.div`
  grid-column: auto / span 3;
  background-color: ${(props) => props.theme.colors.white};
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatsViewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatsView = () => {
  const { history } = useSelector((state) => state.gameHistoryReducer);

  return (
    <StatsViewContainer>
      <StatsViewTitle>Your stats 📊</StatsViewTitle>
      <div>
        <StatsViewSubtitle>Scoring :</StatsViewSubtitle>
        <p>Paire = 20 points</p>
        <p>*Double Paire = 60 points</p>
        <p>Brelan = 100 points</p>
        <p>*Full = 200 points</p>
        <p>Carré = 400 points</p>
        <p>Yam's = 1000 points</p>
        <p>
          <br />* = non disponible
        </p>
      </div>
      <StatsViewSubtitle>History of your games :</StatsViewSubtitle>
      <StatsViewListContainer>
        {history.length > 0 ? (
          history.map((game, key) => {
            let combos = countCombo(game.results);
            return (
              <StatsViewCardContainer key={key}>
                <p># {key + 1}</p>
                <p>Nombre de lancer : {game.tryLength}</p>
                <p>Nombre de brelan : {combos.brelan}</p>
                <p>Nombre de carré : {combos.square}</p>
                <p>Nombre de yams : {combos.yams}</p>

                <p>Score : {game.score}</p>
              </StatsViewCardContainer>
            );
          })
        ) : (
          <p>No game played.</p>
        )}
      </StatsViewListContainer>
    </StatsViewContainer>
  );
};
