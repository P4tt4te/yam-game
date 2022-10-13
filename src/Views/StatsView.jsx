import React from "react";
import styled from "styled-components";

const StatsViewContainer = styled.section`
  border-radius: 2rem;
  padding: 3.6rem;
  margin: 2rem;
  background-color: #edf5f1;
`;

const AppTitle = styled.h1`
  font-size: 3.2rem;
  font-variation-settings: "wght" 700;
`;

export const StatsView = ({
  username,
  trips,
  addSelectTrip,
  trip,
  dispatch,
  changeSeats,
}) => {
  return (
    <StatsViewContainer>
      <p>Page statistiques</p>
    </StatsViewContainer>
  );
};
