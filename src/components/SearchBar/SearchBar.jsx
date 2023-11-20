import { useState } from 'react';

import RentButton from 'components/RentButton';

import makes from 'makes.json';

import * as s from './SearchBar.styled';

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageMin, setMileageMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  // console.log(selectedOption);

  const CarMakeList = makes.map(make => ({
    value: `${make}`,
    label: `${make}`,
  }));

  const CarPriceList = (() => {
    let price = [];

    const priceFunc = () => {
      for (let i = 5; i <= 1000; i += 5) {
        price.push({
          value: i,
          label: i,
        });
      }
      return price;
    };

    return priceFunc();
  })();

  const handleMileage = () => {};

  const clearFields = () => {
    setSelectedOption(null);
    setSelectedPrice(null);
    setMileageMin('');
    setMileageMax('');
  };

  return (
    <>
      <s.Container>
        <s.CarBrandFilterBox>
          <s.Label htmlFor="carBrand">Car brand</s.Label>
          <s.SelectForm
            id="carBrand"
            name="carBrand"
            isClearable={true}
            isSearchable={true}
            options={CarMakeList}
            value={selectedOption}
            placeholder={'Enter the text'}
            onChange={setSelectedOption}
          />
        </s.CarBrandFilterBox>

        <s.PriceFilterBox>
          <s.Label htmlFor="price">Price/ 1 hour</s.Label>
          <s.SelectForm
            id="price"
            name="price"
            isClearable={true}
            isSearchable={true}
            options={CarPriceList}
            value={selectedPrice}
            placeholder={'To $'}
            onChange={setSelectedPrice}
          />
        </s.PriceFilterBox>

        <s.MileageBox>
          <s.Label htmlFor="mileage">Сar mileage / km</s.Label>
          <s.MainLabelBox>
            <s.SecondaryLabelBox>
              <s.LabelInside>From</s.LabelInside>
              <s.InputFieldMin
                minLength="3"
                maxLength="6"
                inputMode="numeric"
                value={mileageMin}
                onChange={handleMileage}
              />
            </s.SecondaryLabelBox>
            <s.SecondaryLabelBox>
              <s.LabelInside>To</s.LabelInside>
              <s.InputFieldMax
                minLength="3"
                maxLength="6"
                inputMode="numeric"
                value={mileageMax}
                onChange={handleMileage}
              />
            </s.SecondaryLabelBox>
          </s.MainLabelBox>
        </s.MileageBox>

        <div>
          <RentButton>Search</RentButton>
        </div>
        <div onClick={clearFields}>
          <RentButton>Clear all</RentButton>
        </div>
      </s.Container>
    </>
  );
};

export default SearchBar;
