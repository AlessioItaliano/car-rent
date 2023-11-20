import styled from 'styled-components';
import Select from 'react-select';

import { NumericFormat } from 'react-number-format';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
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

export const SelectForm = styled(Select)`
  width: 100%;
  height: 48px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const MileageBox = styled.div`
  width: 321px;
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
  width: 160px;
  height: 48px;

  padding-left: 70px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border: none;
  border-right: 1px solid ${variables.colors.placeholder};
  background: ${variables.colors.bgInput};

  color: ${variables.colors.primary};
`;

export const InputFieldMax = styled(NumericFormat)`
  width: 160px;
  height: 48px;

  padding-left: 49px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border: none;
  background: ${variables.colors.bgInput};

  color: ${variables.colors.primary};
`;
