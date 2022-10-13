import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useSelector } from 'react-redux';

const StyledNavBar = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.gray};
  padding: 2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  width: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  min-height: 95vh;
`;

const LogoContainer = styled.div`
  font-variation-settings: 'wght' 700;
  font-size: 2rem;
  margin-bottom: 6.4rem;
  text-align: center;
  padding: 2rem;
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const CoinsContainer = styled.div`
    background: #d6831e;
    color: white;
    font-size: 3.2rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 1rem;
`;

export const NavBar = () => {
  const location = useLocation();
  const { money } = useSelector((state) => state.gameHistoryReducer);

  const linksNames = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/stats',
      name: 'Stats',
    }
  ];

  return (
    <StyledNavBar>
      <LogoContainer>Yam game</LogoContainer>
      <NavLinksContainer>
        {linksNames.map((linkname, i) => {
          return (
            <Link to={linkname.link} key={i}>
              <Button
                name={linkname.name}
                variant={
                  location.pathname === linkname.link ? 'default' : 'grey'
                }
              />
            </Link>
          );
        })}
      </NavLinksContainer>
        <CoinsContainer>
            {money} Coins
        </CoinsContainer>
    </StyledNavBar>
  );
};