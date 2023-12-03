import styled from 'styled-components';
import { variables } from '../../stylesheet/variables';

export const List = styled.ul`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;

  // gap: 30px;
  // width: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 28px;

  margin-bottom: 100px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    // width: 1000px;
  }
`;
