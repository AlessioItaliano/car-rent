import { useEffect, useState } from 'react';

import {
  getFilteredCars,
  removeFilteredCars,
} from 'redux/filter/filterOperations';
// import { selectCars } from 'redux/cars/carsSelectors';
// import { selectFilteredCar } from 'redux/filter/filterSelectors';

import makes from 'makes.json';

import { variables } from '../../stylesheet/variables';
import * as s from './SearchBar.styled';
import { useDispatch } from 'react-redux';
// import { getFirstCarsPage } from 'redux/cars/carsOperations';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageMin, setMileageMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  // console.log(selectedBrand);
  // console.log(selectedPrice);

  console.log(mileageMin);
  console.log(mileageMax);

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

  const handleMileage = e => {
    if (e.target.name === 'mileageMin') {
      setMileageMin(e.target.value);
    } else if (e.target.name === 'mileageMax') {
      setMileageMax(e.target.value);
    }
  };

  const handleSearch = async e => {
    e.preventDefault();
    const searchCars = {
      make: selectedBrand ? selectedBrand.value : undefined,
      rentalPrice: selectedPrice ? selectedPrice.value : undefined,
      mileageMin: mileageMin.split(',').join('') || 0,
      mileageMax: mileageMax.split(',').join('') || 99999,
    };

    const fetchData = async () => {
      try {
        const response = await dispatch(getFilteredCars(searchCars));
        if (response.payload.length === 0) {
        }
        // console.log(selectedBrand.value);
        // console.log(selectedPrice.value);
        console.log(response.payload);

        // Handle the response or dispatch actions based on the response here
      } catch (error) {
        // Handle errors if necessary
      }
    };

    fetchData();
  };

  const clearFields = () => {
    setSelectedBrand('');
    setSelectedPrice('');
    setMileageMin('');
    setMileageMax('');

    dispatch(removeFilteredCars());
  };

  useEffect(() => {
    if (
      selectedBrand !== null ||
      selectedPrice !== null ||
      mileageMin !== '' ||
      mileageMax !== ''
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedBrand, selectedPrice, mileageMin, mileageMax]);

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
            value={selectedBrand}
            placeholder={'Enter the text'}
            onChange={setSelectedBrand}
            styles={{
              control: provided => ({
                ...provided,
                backgroundColor: variables.colors.bgInput,
                color: variables.colors.primary,
                borderRadius: '12px',
                height: '48px',
                border: 'none',
              }),
              indicatorSeparator: () => ({ display: 'none' }),
              dropdownIndicator: (base, state) => ({
                ...base,
                transition: 'transform 0.5s',
                transform: state.selectProps.menuIsOpen
                  ? 'rotate(180deg)'
                  : 'none',
              }),
              placeholder: base => ({
                ...base,
                color: variables.colors.primary,
              }),
            }}
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
            styles={{
              control: provided => ({
                ...provided,
                backgroundColor: variables.colors.bgInput,
                color: variables.colors.primary,
                borderRadius: '12px',
                height: '48px',
                border: 'none',
              }),
              indicatorSeparator: () => ({ display: 'none' }),
              dropdownIndicator: (base, state) => ({
                ...base,
                transition: 'transform 0.5s',
                transform: state.selectProps.menuIsOpen
                  ? 'rotate(180deg)'
                  : 'none',
              }),
              placeholder: base => ({
                ...base,
                color: variables.colors.primary,
              }),
            }}
          />
        </s.PriceFilterBox>

        <s.MileageBox>
          <s.Label htmlFor="mileage">Сar mileage / km</s.Label>
          <s.MainLabelBox>
            <s.SecondaryLabelBox>
              <s.LabelInside>From</s.LabelInside>
              <s.InputFieldMin
                name="mileageMin"
                minLength="3"
                maxLength="6"
                format="##,###"
                decimalScale={3}
                thousandSeparator={true}
                value={mileageMin}
                onChange={handleMileage}
              />
            </s.SecondaryLabelBox>
            <s.SecondaryLabelBox>
              <s.LabelInside>To</s.LabelInside>
              <s.InputFieldMax
                name="mileageMax"
                minLength="3"
                maxLength="6"
                format="##,###"
                decimalScale={3}
                thousandSeparator={true}
                value={mileageMax}
                onChange={handleMileage}
              />
            </s.SecondaryLabelBox>
          </s.MainLabelBox>
        </s.MileageBox>

        <s.Button
          type="submit"
          onClick={handleSearch}
          disabled={isDisabled}
          aria-label="Search cars by filter"
        >
          Search
        </s.Button>
        <s.Button
          type="button"
          onClick={clearFields}
          disabled={isDisabled}
          aria-label="Reset filters"
        >
          Reset filters
        </s.Button>
      </s.Container>
    </>
  );
};

export default SearchBar;
