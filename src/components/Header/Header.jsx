import { useState, useEffect } from 'react';
import BurgerMenu from 'components/BurgerMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import mainLogo from '../../images/logo.png';
import * as s from './Header.styled';

const Header = () => {
  const [shownModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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

      {isMobile && (
        <s.BurgerMenuBtn type="button" onClick={onModal}>
          <GiHamburgerMenu size="100%" />
        </s.BurgerMenuBtn>
      )}
      {shownModal && isMobile && <BurgerMenu onClose={onModal} />}
      {!isMobile && (
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
