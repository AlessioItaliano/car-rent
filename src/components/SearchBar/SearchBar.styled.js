import styled from 'styled-components';

import { NumericFormat } from 'react-number-format';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: end;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    flex-direction: row;
    align-items: end;
    gap: 28px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 18px;
  }
`;

export const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    justify-content: start;
    width: auto;
  }
`;

export const CarBrandFilterBox = styled.div`
  display: block;
  width: 224px;
`;

export const PriceFilterBox = styled.div`
  display: block;
  width: 125px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;

  color: ${variables.colors.placeholder};
`;

export const MileageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Mileage = styled.div`
  min-width: 280px;
  max-width: 100%;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 321px;
  }
`;

export const MainLabelBox = styled.div`
  display: flex;
`;

export const SecondaryLabelBox = styled.div`
  position: relative;
`;

export const LabelInside = styled.span`
  position: absolute;
  left: 24px;
  top: 14px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  color: ${variables.colors.primary};
`;

export const InputFieldMin = styled(NumericFormat)`
  width: 100%;
  height: 48px;

  padding-left: 70px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border: none;
  border-right: 1px solid ${variables.colors.placeholder};
  background-color: ${variables.colors.bgInput};

  color: ${variables.colors.primary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 160px;
  }
`;

export const InputFieldMax = styled(NumericFormat)`
  width: 100%;
  height: 48px;

  padding-left: 49px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border: none;
  background-color: ${variables.colors.bgInput};

  color: ${variables.colors.primary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 160px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 50px;
  max-width: 500px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  cursor: pointer;

  border-radius: 12px;
  border-color: transparent;
  background-color: ${variables.colors.accent};

  color: ${variables.colors.tertiary};

  &:focus,
  &:hover {
    background-color: ${variables.colors.accentHover};
  }

  &:disabled {
    background-color: ${variables.colors.accent};

    opacity: 0.7;
    cursor: auto;
  }
`;
