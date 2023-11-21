import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://64c2ad55eb7fd5d6ebd0337b.mockapi.io`;

export const getFirstCarsPage = createAsyncThunk(
  'cars/getFirstCarsPage',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page: 1,
          limit: 8,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getRestOfCars = createAsyncThunk(
  'cars/getRestOfCars',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page,
          limit: 8,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
