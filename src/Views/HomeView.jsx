import React from 'react';
import styled from 'styled-components';

import { DicesRoll } from '../components/DicesRoll/DicesRoll';

const HomeViewContainer = styled.section`
  border-radius: 2rem;
  padding: 3.6rem;
  margin: 2rem;
  background-color: #edf5f1;
`;

export const HomeView = ({}) => {
  /* Access to the store, read-only */

  return (
    <HomeViewContainer>
      <DicesRoll />
    </HomeViewContainer>
  );
};
