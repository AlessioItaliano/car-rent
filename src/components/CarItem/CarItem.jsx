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
