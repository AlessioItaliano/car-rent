import * as s from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <s.Container>
      <s.Button onClick={onLoadMore}>Load more</s.Button>
    </s.Container>
  );
};

export default LoadMoreBtn;
