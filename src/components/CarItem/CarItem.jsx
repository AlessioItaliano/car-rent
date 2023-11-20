import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button';
import CarItemModal from 'components/CarItemModal';

import { ReactComponent as IconFavorite } from '../../icons/Catalog/heart-active.svg';
import { ReactComponent as IconNotFavorite } from '../../icons/Catalog/heart-normal.svg';

import { selectFavoritesCars } from 'redux/favorites/favoritesSelectors';
import { addFavorite, removeFavorite } from 'redux/favorites/favoritesSlice';

import * as s from './CarItem.styled';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCarsList = useSelector(selectFavoritesCars);
  const [shownModal, setShowModal] = useState(false);

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

  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];
  const mainAccessor = accessories[0];

  const handleFavorite = e => {
    e.stopPropagation();
    if (favoritesCarsList.some(favoriteCar => favoriteCar.id === car.id)) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const onModal = () => {
    setShowModal(prevShownModal => !prevShownModal);
  };

  return (
    <s.Container>
      <s.ImgBox onClick={onModal}>
        <s.Foto src={img} alt="Car_image" />
      </s.ImgBox>

      <s.FavoriteContainer onClick={handleFavorite}>
        {favoritesCarsList.some(favoriteCar => favoriteCar.id === car.id) ? (
          <s.StyledActiveIcon>
            <IconFavorite />
          </s.StyledActiveIcon>
        ) : (
          <s.StyledNormalIcon>
            <IconNotFavorite />
          </s.StyledNormalIcon>
        )}
      </s.FavoriteContainer>

      <s.Description>
        <s.MainDesctiption>
          <s.CarModel>
            {make}
            <s.Model> {model}</s.Model>, {year}
          </s.CarModel>
          <span>{rentalPrice}</span>
        </s.MainDesctiption>

        <s.AdditionalDesctiption>
          {city} | {country} | {rentalCompany} <br />
          {type} | {model} | {id} | {mainAccessor}
        </s.AdditionalDesctiption>
      </s.Description>
      <s.CarItemBtn onClick={onModal}>
        <Button>Learn more</Button>
      </s.CarItemBtn>

      {shownModal && <CarItemModal onClose={onModal} car={car} />}
    </s.Container>
  );
};
export default CarItem;
