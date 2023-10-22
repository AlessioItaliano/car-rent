// import Navigation from 'components/navigation';
// import UserMenu from 'components/userMenu';
// import AuthNav from 'components/authNav';
// import { useAuth } from 'hooks';

import Button from 'components/Button';

import * as s from './Hero.styled';

const Hero = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <s.Hero>
      <s.HeroContainer>
        <s.Title>
          RENTAL <br />- the best way to find a car!
        </s.Title>{' '}
        <s.MainButton>
          <s.Link to="/catalog">
            <Button>Find car!</Button>
          </s.Link>
        </s.MainButton>
      </s.HeroContainer>
    </s.Hero>
  );
};

export default Hero;
