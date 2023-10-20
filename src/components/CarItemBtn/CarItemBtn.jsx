import { useState } from 'react';

import Button from 'components/Button';
import CarItemModal from 'components/CarItemModal';

import * as s from './CarItemBtn.styled';

const CatItemBtn = ({ car }) => {
  const [shownModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(prevShownModal => !prevShownModal);
  };

  return (
    <>
      <s.MainButton onClick={onModal}>
        <Button>Learn more</Button>
      </s.MainButton>
      {shownModal && <CarItemModal onClose={onModal} car={car} />}
    </>
  );
};

export default CatItemBtn;
