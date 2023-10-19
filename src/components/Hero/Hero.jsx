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
      <s.Title>
        RENTAL <br />- one click and the car is yours!
      </s.Title>

      <s.MainButton>
        <s.Link to="/catalog">
          <Button>Find car!</Button>
        </s.Link>
      </s.MainButton>
    </s.Hero>
  );
};

export default Hero;
