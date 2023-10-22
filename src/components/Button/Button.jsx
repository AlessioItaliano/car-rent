import * as s from './Button.styled';

const Button = ({ children }) => {
  return <s.Button type="button">{children}</s.Button>;
};

export default Button;
