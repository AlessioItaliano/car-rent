import * as s from './Sidebar.styled';

const Sidebar = ({ title, children }) => (
  <s.Section>
    <s.Container>
      {title && <s.Title>{title}</s.Title>}
      {children}
    </s.Container>
  </s.Section>
);

export default Sidebar;
