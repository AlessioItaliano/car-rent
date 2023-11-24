import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://64c2ad55eb7fd5d6ebd0337b.mockapi.io`;

export const getFilteredCars = createAsyncThunk(
  'filteredCars/getFilteredCars',
  async ({ make, rentalPrice }, thunkAPI) => {
    try {
      // First request to filter by make
      const firstResponse = await axios.get('/adverts', {
        params: {
          make,
        },
      });

      // Extract the filtered data based on make
      const filteredByMake = firstResponse.data;

      // Now filter the data by rentalPrice
      const filteredByRentalPrice = filteredByMake.filter(
        car => car.rentalPrice === rentalPrice
      );

      // mileage;
      console.log(filteredByMake);
      console.log(make);
      console.log(rentalPrice);
      console.log(filteredByRentalPrice);

      return filteredByRentalPrice;
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
