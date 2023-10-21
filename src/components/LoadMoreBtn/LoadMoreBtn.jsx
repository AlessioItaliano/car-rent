import * as s from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onNextPage }) => {
  return (
    <s.Container>
      <s.Button onClick={onNextPage}>Load more</s.Button>
    </s.Container>
  );
};

export default LoadMoreBtn;
