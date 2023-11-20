import { createSlice } from '@reduxjs/toolkit';

import { getFirstCarsPage, getRestOfCars } from './carsOperations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFirstCarsPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFirstCarsPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(getFirstCarsPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // .addCase(getRestOfCars.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(getRestOfCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.cars = [...state.cars, ...action.payload];
        // state.cars = action.payload;
      })
      .addCase(getRestOfCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const carsReducer = carsSlice.reducer;
