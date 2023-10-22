import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Warning = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: black;
  font-size: 36px;
  font-weight: 500;

  margin-bottom: 100px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-bottom: 100px;
`;
