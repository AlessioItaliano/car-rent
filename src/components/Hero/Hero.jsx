import { NavLink } from 'react-router-dom';

import Button from 'components/Button';

import * as s from './Hero.styled';

const Hero = () => {
  return (
    <s.Hero>
      <s.HeroContainer>
        <s.Title>
          RENTAL <br /> -the best way to find a car!
        </s.Title>
        <s.MainButton>
          <NavLink to="/catalog" aria-label="go to Catalog">
            <Button>Find car!</Button>
          </NavLink>
        </s.MainButton>
      </s.HeroContainer>
    </s.Hero>
  );
};

export default Hero;
