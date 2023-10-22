import { GiPoliceCar } from 'react-icons/gi';
import * as s from './EmptyPage.styled';

import Button from 'components/Button';

const EmptyPage = () => {
  return (
    <s.Warning>
      <s.Title>
        Oops, you haven't selected any cars yet! Hurry up and choose!
      </s.Title>
      <s.StyledLink to="/catalog">
        <Button> Catalog </Button>
      </s.StyledLink>
      <GiPoliceCar size="300px" />
    </s.Warning>
  );
};

export default EmptyPage;
