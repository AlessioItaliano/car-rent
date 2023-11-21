import { createSlice } from '@reduxjs/toolkit';

import { getFilteredCars } from './filterOperations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const filteredCarsSlice = createSlice({
  name: 'filteredCars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFilteredCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(getFilteredCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// export const { setFilterContacts } = filtersSlice.actions;

export const filteredCarsReducer = filteredCarsSlice.reducer;
