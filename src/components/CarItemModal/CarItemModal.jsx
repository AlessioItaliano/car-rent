import Modal from 'components/Modal';
import CarItemForm from 'components/CarItemForm';

const CatItemModal = ({ onClose, car }) => {
  return (
    <>
      <Modal onClose={onClose}>
        <CarItemForm onClose={onClose} car={car} />
      </Modal>
    </>
  );
};

export default CatItemModal;
