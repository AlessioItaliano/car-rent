import * as s from './Section.styled';

const Section = ({ title, children }) => (
  <s.Section>
    <s.Container>
      {title && <s.Title>{title}</s.Title>}
      {children}
    </s.Container>
  </s.Section>
);

export default Section;
