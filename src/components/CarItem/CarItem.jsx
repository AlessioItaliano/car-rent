import { useFavorites } from 'hooks/useFavorites';

import CarItemBtn from 'components/CarItemBtn';

import { ReactComponent as IconFavorite } from '../../icons/Catalog/heart-active.svg';
import { ReactComponent as IconNotFavorite } from '../../icons/Catalog/heart-normal.svg';

import * as s from './CarItem.styled';

const ListItem = ({ car }) => {
  const [, isFavorite, setIsFavorite] = useFavorites();

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

  const handleFavorite = e => {
    e.stopPropagation();
    setIsFavorite(car.id);
  };

  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];
  const mainAccessor = accessories[0];

  return (
    <s.Container>
      <s.Foto src={img} alt="Car image" />

      <s.FavoriteContainer onClick={handleFavorite}>
        {isFavorite(car.id) ? (
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
export default ListItem;
