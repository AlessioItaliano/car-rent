import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as CloseIconBtn } from '../../icons/Catalog/x-close.svg';

import { variables } from '../../stylesheet/variables';

export const Field = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  padding: 20px;
  box-sizing: border-box;

  background: linear-gradient(
    to top,
    ${variables.colors.bgMainPrimaryGrad},
    ${variables.colors.bgMainSecondaryGrad}
  );
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20px;
  right: 20px;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;

  color: ${variables.colors.tertiary};
`;

export const Logo = styled(NavLink)`
  display: flex;
  width: 50px;
  height: auto;
  gap: 5px;

  margin-bottom: 30px;

  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 700;

  color: ${variables.colors.tertiary};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
