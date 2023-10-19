// import Navigation from 'components/navigation';
// import UserMenu from 'components/userMenu';
// import AuthNav from 'components/authNav';
// import { useAuth } from 'hooks';

import * as s from './Button.styled';

const Button = ({ children }) => {
  return <s.Button type="button">{children}</s.Button>;
};

export default Button;
