import styled from 'styled-components';

import imageX1 from '../../images/hero-desktop-x1.jpeg';
import imageX2 from '../../images/hero-desktop-x2.jpeg';

import { variables } from '../../stylesheet/variables';

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 70vh;
  padding: 300px 100px 100px 100px;
  margin: 0 auto 0 auto;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-color: ${variables.colors.bgMainSecondaryGrad};
  background-image: url(${imageX1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imageX2});
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  width: 1000px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;

  color: ${variables.colors.tertiary};

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 4s forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const MainButton = styled.div`
  display: flex;
  justify-content: center;
`;
