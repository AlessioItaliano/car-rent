import * as s from './Header.styled';

// import { ReactComponent as Logo } from '../../images/logo512.png';
import mainLogo from '../../images/logo512.png';

// import { ReactComponent as Mail } from '../../icons/MainPage/email.svg';
// import { ReactComponent as Telephone } from '../../icons/MainPage/telephone.svg';

const Header = () => {
  return (
    <s.Header>
      <s.Logo>
        <img src={mainLogo} alt="Rental logo" />
        <s.Title>Rental</s.Title>
      </s.Logo>
      <s.Nav>
        <s.StyledLink to="/">Home</s.StyledLink>
        <s.StyledLink to="/catalog">Catalog</s.StyledLink>
        <s.StyledLink to="/favorites">Favorites</s.StyledLink>
      </s.Nav>
    </s.Header>
  );
};

export default Header;
