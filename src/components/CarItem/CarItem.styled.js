import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
`;

export const Foto = styled.img`
  width: 274px;
  height: 280px;
  // flex-shrink: 0;
  object-fit: cover;
  // object-position: 50% 50%;

  border-radius: 12px;

  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const Description = styled.div`
  // display: flex;
  // justify-content: space-between;
  color: #121417;
  flex-grow: 1;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  margin-top: 14px;
`;

export const MainDesctiption = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const AdditionalDesctiption = styled.span`
  display: flex;
  height: 36px;
  overflow: hidden;
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

// export const MainButton = styled.p`
//   display: flex;
//   justify-content: center;
// `;

export const IconBox = styled.div`
  height: 16px;
  color: rgba(18, 20, 23, 0.1);
`;
