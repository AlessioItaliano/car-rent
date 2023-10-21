import Button from 'components/Button';
import * as s from './CarItemForm.styled';

const CarItemForm = ({ car }) => {
  const {
    id,
    img,
    year,
    type,
    make,
    model,
    engineSize,
    address,
    // accessories,
    description,
    fuelConsumption,
  } = car;

  const [, city, country] = address.match(/,\s([^,]+),\s([^,]+)$/);

  return (
    <>
      <s.Foto src={img} alt="Car image" />
      <s.MainDescription>
        {make}
        <s.Model> {model}</s.Model>, {year}
      </s.MainDescription>
      <s.AdditionalDescription>
        {city} | {country} | Id:{id} | Year:{year} | Type:{type} <br />
        Fuel Consumption:{fuelConsumption} | Engine Size: {engineSize}
      </s.AdditionalDescription>
      <s.Description>{description}</s.Description>

      <div>
        <s.Title>Accessories and functionalities:</s.Title>
        <s.AdditionalDescription>
          {city} | {country} | Id:{id} | Year:{year} | Type:{type} <br />
          Fuel Consumption:{fuelConsumption} | Engine Size: {engineSize}
        </s.AdditionalDescription>
      </div>
      <div>
        <s.Title>Rental Conditions:</s.Title>
      </div>
      <s.RentBtn href="tel:+380730000000">
        <Button>Rent car</Button>
      </s.RentBtn>
    </>
  );
};

export default CarItemForm;
