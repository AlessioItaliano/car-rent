import { NavLink } from 'react-router-dom';

import { ReactComponent as CloseIconBtn } from '../../icons/Catalog/x-close.svg';

import { variables } from '../../stylesheet/variables';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${variables.colors.scroll};
`;

export const Field = styled.aside`
  position: absolute;

  min-width: 400px;
  height: 100vh;

  padding: 100px 150px;
  box-sizing: border-box;

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  background: linear-gradient(
    to top,
    ${variables.colors.bgMainSecondaryGrad},
    ${variables.colors.bgMainPrimaryGrad}
  );
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 16px;
  right: 16px;
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

export const Title = styled.h2`
  margin-bottom: 150px;

  text-transform: uppercase;

  font-size: 40px;
  font-weight: bold;

  color: ${variables.colors.tertiary};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 99px;
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
