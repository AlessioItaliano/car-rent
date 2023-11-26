import styled from 'styled-components';
import { variables } from '../../stylesheet/variables';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  margin-right: auto;
  margin-left: auto;

  background: linear-gradient(
    to top,
    ${variables.colors.bgMainSecondaryGrad},
    ${variables.colors.bgMainPrimaryGrad}
  );

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 50px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-size: 35px;
  font-weight: 700;

  color: ${variables.colors.tertiary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 40px;
  }
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 50px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 80px;
  }
`;

export const AddressItem = styled.a`
  display: flex;
  gap: 10px;

  fill: ${variables.colors.tertiary};
  color: ${variables.colors.tertiary};

  font-size: 14px;
  line-height: 1.71;
  text-decoration: none;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

export const Icon = styled.div`
  width: 18px;
  height: auto;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 22px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 25px;
  }
`;

export const CopyRight = styled.p`
  color: ${variables.colors.tertiary};
  font-size: 10px;
  line-height: 1.71;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
  color: ${variables.colors.accent};
`;
