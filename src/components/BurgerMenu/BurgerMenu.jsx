import { createPortal } from 'react-dom';

import mainLogo from '../../images/logo.png';
import * as s from './BurgerMenu.styled';

const BurgerMenuRoot = document.getElementById('burgerMenu-root');

const BurgerMenu = ({ onClose }) => {
  return createPortal(
    <s.Field>
      <s.CloseButton onClick={onClose} aria-label="Close">
        <s.IconBtn />
      </s.CloseButton>
      <s.Logo to="/">
        <img src={mainLogo} alt="Rental logo" />
        <s.Title>Rental</s.Title>
      </s.Logo>
      <s.Nav>
        <s.StyledLink to="/" onClick={onClose} aria-label="Home page">
          Home
        </s.StyledLink>
        <s.StyledLink to="/catalog" onClick={onClose} aria-label="Catalog page">
          Catalog
        </s.StyledLink>
        <s.StyledLink
          to="/favorites"
          onClick={onClose}
          aria-label="Favorites page"
        >
          Favorites
        </s.StyledLink>
      </s.Nav>
    </s.Field>,

    BurgerMenuRoot
  );
};

export default BurgerMenu;
