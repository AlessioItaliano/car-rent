import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import image from '../../images/hero-desktop-x2.jpeg';

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  background-color: blue; /////!!!!
  background-image: url(${image});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 400px;

  padding: 200px 100px 100px 100px;
  margin: 0 auto 0 auto;
`;

//  background-image: linear-gradient(to top, $gradient-bg-cl, $gradient-bg-cl),

export const Title = styled.h1`
  color: white;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;

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

export const Link = styled(NavLink)`
  text-decoration: none;

  }
`;
