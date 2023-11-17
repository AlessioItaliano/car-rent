import styled from 'styled-components';
import { variables } from '../../stylesheet/variables';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px;

  margin-right: auto;
  margin-left: auto;

  background: linear-gradient(
    to top,
    ${variables.colors.bgMainSecondaryGrad},
    ${variables.colors.bgMainPrimaryGrad}
  );
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-size: 50px;
  font-weight: 700;

  color: ${variables.colors.tertiary};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  width: 1240px;
  margin-bottom: 30px;
`;

export const AddressItem = styled.a`
  display: flex;
  gap: 10px;

  fill: ${variables.colors.tertiary};
  color: ${variables.colors.tertiary};

  font-size: 24px;
  line-height: 1.71;
  text-decoration: none;
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
`;

export const CopyRight = styled.p`
  color: ${variables.colors.tertiary};
  font-size: 20px;
  line-height: 1.71;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: ${variables.colors.accent};
`;
