import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://64c2ad55eb7fd5d6ebd0337b.mockapi.io`;

export const getFilteredCars = createAsyncThunk(
  'filteredCars/getFilteredCars',
  async ({ make, rentalPrice, mileage }, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page: 1,
          limit: 8,
          make,
          rentalPrice,
          mileage,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
