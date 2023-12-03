import styled from 'styled-components';

import noImg from '../../images/noImage.jpeg';

import { variables } from '../../stylesheet/variables';

export const ImgBox = styled.div`
  max-width: 100%;
  // height: 248px;

  margin-bottom: 10px;

  border-radius: 14px;
  border: 1px solid ${variables.colors.secondary};

  background: linear-gradient(
    180deg,
    ${variables.colors.scroll} 2.5%,
    ${variables.colors.lineDivider} 41.07%
  );

  background-image: url(${noImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 461px;
    height: 248px;
  }

  // @media screen and (min-width: ${variables.breakpoints.desktop}) {
  //   padding: 40px;
  //   width: 541px;
  // }
`;

export const Foto = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  border-radius: 14px;
  object-fit: cover;
`;

export const AllDescription = styled.div`
  overflow-y: auto;
`;

export const MainDescription = styled.div`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;

  color: ${variables.colors.primary};
`;

export const Model = styled.span`
  color: ${variables.colors.accent};
`;

export const AdditionalDescription = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  font-size: 12px;

  color: ${variables.colors.secondary};
`;

export const Description = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  line-height: 1.42;

  color: ${variables.colors.primary};
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  color: ${variables.colors.primary};
`;

export const RentBtn = styled.a`
  text-decoration: none;
`;

export const AccessoriesDescription = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  margin-bottom: 4px;
`;

export const AccessoriesItem = styled.li`
  padding: 0 6px;
  font-size: 12px;

  color: ${variables.colors.lineDivider};

  &:not(:last-child) {
    border-right: 1px solid ${variables.colors.lineDivider};
  }
`;

export const DescriptionBox = styled.div`
  margin-bottom: 24px;
`;

export const Rental = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalItem = styled.li`
  padding: 7px 14px;

  font-size: 12px;

  border-radius: 35px;

  color: ${variables.colors.additionalModal};
  background-color: ${variables.colors.bgAdditionalModal};
`;

export const Box = styled.span`
  font-weight: 600;

  color: ${variables.colors.accent};
`;

export const BoxInside = styled.div`
  margin-bottom: 4px;
`;
