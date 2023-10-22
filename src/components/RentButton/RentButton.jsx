import * as s from './RentButton.styled';

const RentButton = ({ children }) => {
  return <s.Button type="button">{children}</s.Button>;
};

export default RentButton;
