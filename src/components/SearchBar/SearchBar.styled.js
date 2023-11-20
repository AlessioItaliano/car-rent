import styled from 'styled-components';
import Select from 'react-select';
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 925px;
  // height: 74px;

  padding-top: 60px;
`;
export const FilterBox = styled.div`
  display: block;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const SelectForm = styled(Select)`
  width: 100%;
`;
