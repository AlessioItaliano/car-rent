import styled from 'styled-components';
import Select from 'react-select';

import { variables } from '../../stylesheet/variables';

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
