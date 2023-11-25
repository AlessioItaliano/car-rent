import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://64c2ad55eb7fd5d6ebd0337b.mockapi.io`;

export const getFilteredCars = createAsyncThunk(
  'filteredCars/getFilteredCars',
  async ({ make, rentalPrice, mileageMin, mileageMax }, thunkAPI) => {
    try {
      const firstResponse = await axios.get('/adverts', {
        params: {
          make,
        },
      });

      const filteredData = firstResponse.data;

      let filteredList = filteredData;
      if (rentalPrice !== undefined) {
        filteredList = filteredData.filter(
          car => car.rentalPrice === `$${rentalPrice}`
        );
      }

      if (mileageMin !== undefined || mileageMax !== undefined) {
        filteredList = filteredList.filter(car => {
          const mileage = parseFloat(car.mileage);

          return (
            (mileageMin === 0 || mileage >= parseFloat(mileageMin)) &&
            (mileageMax === 99999 || mileage <= parseFloat(mileageMax))
          );
        });
      }
      return filteredList;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFilteredCars = createAsyncThunk(
  'filteredCars/removeFilteredCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
