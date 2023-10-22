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
    mileage,
    address,
    engineSize,
    rentalPrice,
    accessories,
    description,
    fuelConsumption,
    functionalities,
    rentalConditions,
  } = car;

  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];
  const conditions = rentalConditions.split('\n');
  const minAge = conditions[0].split(' ');
  const age = minAge[2];
  const textMinAge = minAge.splice(0, 2).join(' ');

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

      <s.DescriptionBox>
        <s.Title>Accessories and functionalities:</s.Title>
        <s.AdditionalDescription>
          {accessories[0]} | {accessories[1]} | {accessories[2]}
        </s.AdditionalDescription>
        <s.AdditionalDescription>
          {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
        </s.AdditionalDescription>
      </s.DescriptionBox>

      <s.DescriptionBox>
        <s.Title>Rental Conditions: </s.Title>
        <s.Rental>
          <s.RentalItem>
            {textMinAge} <s.Box>{age}</s.Box>
          </s.RentalItem>
          <s.RentalItem>{conditions[1]}</s.RentalItem>
          <s.RentalItem>{conditions[2]}</s.RentalItem>
          <s.RentalItem>
            Mileage:
            <s.Box>{(mileage / 1000).toFixed(3).replace('.', ',')}</s.Box>
          </s.RentalItem>
          <s.RentalItem>
            Price: <s.Box>{rentalPrice.slice(1)}$</s.Box>
          </s.RentalItem>
        </s.Rental>
      </s.DescriptionBox>

      <s.RentBtn href="tel:+380730000000">
        <Button>Rent car</Button>
      </s.RentBtn>
    </>
  );
};

export default CarItemForm;
