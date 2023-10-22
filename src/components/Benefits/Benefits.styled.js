import styled from 'styled-components';
import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;

  color: ${variables.colors.tertiary};
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 30px;
  width: 1000px;
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

  width: 100%;

  color: ${variables.colors.tertiary};
`;
