import styled from 'styled-components';

import noImg from '../../images/noImage.jpeg';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 274px;
  height: 426px;
`;

export const ImgBox = styled.div`
  width: 274px;
  height: 254px;

  border-radius: 12px;
  border: 1px solid ${variables.colors.secondary};

  cursor: pointer;
  transition: transform 1000ms linear, box-shadow 1000ms linear;
  background: linear-gradient(
    180deg,
    ${variables.colors.scroll} 2.5%,
    ${variables.colors.lineDivider} 41.07%
  );

  background-image: url(${noImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px ${variables.colors.primary};
  }
`;

export const Foto = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  border-radius: 12px;
  object-fit: cover;
`;

export const Description = styled.div`
  margin-top: 14px;
  flex-grow: 1;

  font-size: 16px;
  font-weight: 500;

  color: ${variables.colors.primary};
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

  font-size: 12px;
  font-weight: 400;

  color: ${variables.colors.secondary};
`;

export const Model = styled.span`
  color: ${variables.colors.accent};
`;

export const IconBox = styled.div`
  height: 16px;

  color: ${variables.colors.black};
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;
`;

export const StyledActiveIcon = styled.div`
  width: 18px;
  height: 18px;

  color: ${variables.colors.accentBtn};
`;

export const StyledNormalIcon = styled.div`
  width: 18px;
  height: 18px;
  color: ${variables.colors.iconNorm};
`;

export const CarModel = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CarItemBtn = styled.div`
  display: flex;
  justify-content: center;
`;
