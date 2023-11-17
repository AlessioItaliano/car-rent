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

// export const getUserReview = createAsyncThunk(
//   'reviews/getUserReview',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/reviews/own');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const createReview = createAsyncThunk(
//   'reviews/createReview',
//   async ({ rating, comment }, thunkAPI) => {
//     try {
//       const response = await axios.post('/reviews/own', { rating, comment });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const updateReview = createAsyncThunk(
//   'reviews/updateReview',
//   async ({ rating, comment }, thunkAPI) => {
//     try {
//       const response = await axios.patch('/reviews/own', { rating, comment });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteReview = createAsyncThunk(
//   'reviews/deleteReview',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.delete('/reviews/own');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
