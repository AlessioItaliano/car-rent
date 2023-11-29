import { GiPoliceCar } from 'react-icons/gi';
import * as s from './EmptyPage.styled';

import Button from 'components/Button';
import Section from 'components/Section';

const EmptyPage = () => {
  return (
    <Section>
      <s.Warning>
        <s.Title>
          Oops, you haven't selected any cars yet! Hurry up and choose!
        </s.Title>
        <s.StyledLink to="/catalog" aria-label="Catalog page">
          <Button> Catalog </Button>
        </s.StyledLink>
        <GiPoliceCar size="300px" />
      </s.Warning>
    </Section>
  );
};

export default EmptyPage;
