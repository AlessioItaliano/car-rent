import { NavLink } from 'react-router-dom';
import * as s from './SideBar.styled';

const SideBar = () => {
  return (
    <s.Aside>
      <s.Title>Car Rental</s.Title>
      <s.Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </s.Nav>
    </s.Aside>
  );
};

export default SideBar;
