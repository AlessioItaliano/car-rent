import { useState, useEffect } from 'react';
import BurgerMenu from 'components/BurgerMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import mainLogo from '../../images/logo.png';
import * as s from './Header.styled';

const Header = () => {
  const [shownModal, setShowModal] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  useEffect(() => {
    const autoResize = () => {
      setIsBurgerMenu(window.innerWidth <= 768);
    };

    autoResize();

    window.addEventListener('resize', autoResize);

    return () => {
      window.removeEventListener('resize', autoResize);
    };
  }, []);

  const onModal = () => {
    setShowModal(prevShownModal => !prevShownModal);
  };

  return (
    <s.Header>
      <s.Logo to="/">
        <img src={mainLogo} alt="Rental logo" />
        <s.Title>Rental</s.Title>
      </s.Logo>

      {isBurgerMenu && (
        <s.BurgerMenuBtn type="button" onClick={onModal}>
          <GiHamburgerMenu size="100%" />
        </s.BurgerMenuBtn>
      )}
      {shownModal && isBurgerMenu && <BurgerMenu onClose={onModal} />}
      {!isBurgerMenu && (
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
      )}
    </s.Header>
  );
};

export default Header;
