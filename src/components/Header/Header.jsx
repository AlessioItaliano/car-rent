import * as s from './Header.styled';

import mainLogo from '../../images/logo.png';

const Header = () => {
  return (
    <s.Header>
      <s.Logo to="/">
        <img src={mainLogo} alt="Rental logo" />
        <s.Title>Rental</s.Title>
      </s.Logo>
      <s.Nav>
        <s.StyledLink to="/" aria-label="Home page">
          Home
        </s.StyledLink>
        <s.StyledLink to="/catalog" aria-label="Catalog page">
          Catalog
        </s.StyledLink>
        <s.StyledLink to="/favorites" aria-label="Favorites page">
          Favorites
        </s.StyledLink>
      </s.Nav>
    </s.Header>
  );
};

export default Header;
