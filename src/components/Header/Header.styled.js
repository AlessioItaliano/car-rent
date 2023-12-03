import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { variables } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  margin-right: auto;
  margin-left: auto;

  margin-bottom: 20px;

  background: linear-gradient(
    to top,
    ${variables.colors.bgMainPrimaryGrad},
    ${variables.colors.bgMainSecondaryGrad}
  );

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 20px 50px;
    margin-bottom: 60px;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  width: 50px;
  height: auto;
  gap: 5px;

  cursor: pointer;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 70px;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 700;

  color: ${variables.colors.tertiary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 50px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 50px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;

  background: ${variables.colors.accent};
  color: ${variables.colors.tertiary};

  text-decoration: none;

  &:focus,
  &:hover {
    background-color: ${variables.colors.accentHover};
  }

  &.active {
    color: ${variables.colors.primary};
    background-color: ${variables.colors.tertiary};
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 10px 20px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 12px 50px;
  }
`;

export const BurgerMenuBtn = styled.button`
  width: 45px;
  height: auto;

  background-color: inherit;
  border: none;
  color: ${variables.colors.tertiary};

  cursor: pointer;
`;
