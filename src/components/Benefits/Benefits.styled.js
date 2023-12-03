import styled from 'styled-components';
import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  padding-left: 29px;
  padding-right: 29px;
  margin-right: auto;
  margin-left: auto;

  background: linear-gradient(
    to top,
    ${variables.colors.bgMainPrimaryGrad},
    ${variables.colors.bgMainThirdGrad},
    ${variables.colors.bgMainSecondaryGrad}
  );

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 50px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    // flex-direction: row;
    // justify-content: center;
    // align-items: end;
    // gap: 18px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-size: 35px;
  font-weight: 700;

  color: ${variables.colors.tertiary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 30px;
  // width: 1000px;

  margin-bottom: 100px;

  // @media screen and (min-width: ${variables.breakpoints.tablet}) {
  //   flex-basis: calc((100% - 40px) / 2);
  // }

  // @media screen and (min-width: ${variables.breakpoints.desktop}) {
  //   flex-basis: calc((100% - 40px) / 4);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-basis: 256px;
  height: 265px;
  flex-shrink: 0;
  width: 100%;
  padding: 20px;

  font-size: 22px;
  font-weight: 600;
  line-height: 25px;

  color: ${variables.colors.tertiary};
  border: 3px solid ${variables.colors.tertiary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    flex-basis: calc((100% - 40px) / 3);
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    flex-basis: calc((100% - 40px) / 4);
  }
`;

export const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 17px;

  fill: ${variables.colors.tertiary};
`;

export const ItemDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  width: 100%;

  color: ${variables.colors.tertiary};
`;
