import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { carsReducer } from './cars/carsSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { filteredCarsReducer } from './filter/filterSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    filteredCars: filteredCarsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
