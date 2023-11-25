import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getFilteredCars,
  removeFilteredCars,
} from 'redux/filter/filterOperations';

import SelectForm from 'components/Select/Select';

import { Report } from 'notiflix/build/notiflix-report-aio';

import * as s from './SearchBar.styled';

import makes from 'makes.json';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageMin, setMileageMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      selectedBrand !== '' ||
      selectedPrice !== '' ||
      mileageMin !== '' ||
      mileageMax !== ''
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedBrand, selectedPrice, mileageMin, mileageMax]);

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
          Report.failure(
            'Error',
            '"Sorry, no cars were found based on the given parameters."',
            'Try again!'
          );
        }
      } catch (error) {}
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
      selectedBrand !== '' ||
      selectedPrice !== '' ||
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
          <SelectForm
            title={'carBrand'}
            placeholderText={'Enter the text'}
            selectedBrand={selectedBrand}
            CarMakeList={CarMakeList}
            setSelectedBrand={setSelectedBrand}
          />
        </s.CarBrandFilterBox>

        <s.PriceFilterBox>
          <SelectForm
            title={'price'}
            placeholderText={'To $'}
            selectedBrand={selectedPrice}
            CarMakeList={CarPriceList}
            setSelectedBrand={setSelectedPrice}
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
