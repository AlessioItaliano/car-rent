import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { variables } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 50px 20px 50px;

  margin-right: auto;
  margin-left: auto;

  background: linear-gradient(
    to top,
    ${variables.colors.bgMainPrimaryGrad},
    ${variables.colors.bgMainSecondaryGrad}
  );
`;

export const Logo = styled.div`
  display: flex;
  width: 70px;
  height: auto;
  gap: 5px;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;

  color: ${variables.colors.tertiary};
`;
export const Nav = styled.nav`
  display: flex;
  //   flex-direction: column;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 50px;
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
`;
