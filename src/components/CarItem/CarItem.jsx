import { useState } from 'react';

// import Button from 'components/Button';
// import Modal from 'components/Modal';

// import { ReactComponent as Vector } from '../../icons/Catalog/vector.svg';

import * as s from './CarItem.styled';
import CarItemBtn from 'components/CarItemBtn';

const ListItem = ({ car }) => {
  const {
    id,
    img,
    year,
    type,
    make,
    model,
    address,
    accessories,
    rentalPrice,
    rentalCompany,
  } = car;

  const [shownModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(prevShownModal => !prevShownModal);
  };

  const [, city, country] = address.match(/,\s([^,]+),\s([^,]+)$/);
  const mainAccessor = accessories[0];

  return (
    <s.Container>
      <s.Foto src={img} alt="Car image" />
      <s.Description>
        <s.MainDesctiption>
          <span>
            {make}
            <s.Model> {model}</s.Model>, {year}
          </span>
          <p>{rentalPrice}</p>
        </s.MainDesctiption>

        <s.AdditionalDesctiption>
          {city} | {country} | {rentalCompany} | {type} | {model} | {id} |
          {mainAccessor}
        </s.AdditionalDesctiption>
      </s.Description>
      <CarItemBtn onClick={onModal} car={car} />
    </s.Container>
  );
};

export default ListItem;
