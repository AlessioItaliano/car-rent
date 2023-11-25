import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { variables } from '../../stylesheet/variables';

export const Warning = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  margin-bottom: 100px;

  font-size: 36px;
  font-weight: 500;

  color: ${variables.colors.black};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  margin-bottom: 100px;
`;
