import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 100px;
`;

export const Button = styled.button`
  cursor: pointer;
  color: ${variables.colors.accentBtn};

  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;

  border: transparent;
  background-color: transparent;

  &:focus,
  &:hover {
    color: ${variables.colors.accentBtnHover};
  }
`;
