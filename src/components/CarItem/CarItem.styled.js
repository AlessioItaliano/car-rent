import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 274px;
  height: 426px;
`;

export const Foto = styled.img`
  width: 274px;
  height: 280px;
  object-fit: cover;

  border-radius: 12px;

  background: linear-gradient(
    180deg,
    ${variables.colors.scroll} 2.5%,
    ${variables.colors.lineDivider} 41.07%
  );
`;

// export const noImage = styled.img`
//   border-radius: 12px;
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

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
