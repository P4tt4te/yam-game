import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1.6rem;
  font-size: 1.6rem;
  font-variation-settings: 'wght' 500;
  border-radius: 1.2rem;
  width: 100%;
  transition: 0.2s cubic-bezier(0.28, 1.01, 0.37, 1);
  transition-property: background-color, transform;
  cursor: pointer;
`;

const ButtonDefault = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.green};
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGreen};
    transform: scale(1.02);
  }
`;

const ButtonLightGrey = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.lightGrey};
  color: ${(props) => props.theme.colors.grey};

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: white;
    transform: scale(1.02);
  }
`;

const ButtonGrey = styled(StyledButton)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey};
`;

export const Button = ({ name, onClick, variant }) => {
  if (variant === 'grey') {
    return <ButtonGrey onClick={onClick && onClick}>{name}</ButtonGrey>;
  } else if (variant === 'lightgrey') {
    return (
      <ButtonLightGrey onClick={onClick && onClick}>{name}</ButtonLightGrey>
    );
  } else {
    return <ButtonDefault onClick={onClick && onClick}>{name}</ButtonDefault>;
  }
};
