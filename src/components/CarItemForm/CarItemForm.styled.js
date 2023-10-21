import styled from 'styled-components';

export const Foto = styled.img`
  width: 461px;
  height: 248px;
  // flex-shrink: 0;
  object-fit: cover;
  // object-position: 50% 50%;

  border-radius: 14px;

  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const MainDescription = styled.span`
  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const AdditionalDescription = styled.span`
  display: flex;

  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const Description = styled.p`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Title = styled.h2`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const RentBtn = styled.a`
  text-decoration: none;
`;
