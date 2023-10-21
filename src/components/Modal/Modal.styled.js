import styled from 'styled-components';
import { ReactComponent as CloseIconBtn } from '../../icons/Catalog/x-close.svg';
// import { globalTheme } from 'theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalField = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  padding: 40px;
  box-sizing: border-box;

  border-radius: 24px;

  background-color: #fff;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;

  color: black;
`;
