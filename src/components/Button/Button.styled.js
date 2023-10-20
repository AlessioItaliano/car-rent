import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  width: 274px;
  // padding: 12px 99px;
  padding: 12px 0 12px 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  border-color: transparent;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    background-color: #0b44cd;
  }
`;
