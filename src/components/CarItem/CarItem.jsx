// import { useFavorites } from 'hooks/useFavorites';
import { useDispatch, useSelector } from 'react-redux';

import CarItemBtn from 'components/CarItemBtn';

import { ReactComponent as IconFavorite } from '../../icons/Catalog/heart-active.svg';
import { ReactComponent as IconNotFavorite } from '../../icons/Catalog/heart-normal.svg';

import { selectFavoritesCars } from 'redux/favorites/favoritesSelectors';
import { addFavorite, removeFavorite } from 'redux/favorites/favoritesSlice';

import * as s from './CarItem.styled';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCarsList = useSelector(selectFavoritesCars);

  // const [, isFavorite, setIsFavorite] = useFavorites();

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
    // e.stopPropagation();
    if (isFavorite(car.id)) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car.id));
    }
  };

  // const filterContacts = ({ currentTarget: { value } }) => {
  //   const normalizedValue = value.toLowerCase().trim();
  //   dispatch(favoritesCarsList(car.id));
  // };

  return (
    <s.Container>
      <s.ImgBox>
        <s.Foto src={img} alt="Car_image" />
      </s.ImgBox>

      <s.FavoriteContainer onClick={handleFavorite}>
        {!addFavorite(car.id) ? (
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
          <span>
            {make}
            <s.Model> {model}</s.Model>, {year}
          </span>
          <span>{rentalPrice}</span>
        </s.MainDesctiption>

        <s.AdditionalDesctiption>
          {city} | {country} | {rentalCompany} <br />
          {type} | {model} | {id} | {mainAccessor}
        </s.AdditionalDesctiption>
      </s.Description>
      <CarItemBtn car={car} />
    </s.Container>
  );
};
export default CarItem;
