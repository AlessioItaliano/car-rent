import { configureStore } from '@reduxjs/toolkit';
// import persistStore from 'redux-persist/es/persistStore';

import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

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

// const persistConfig = {
//   key: 'favorites',
//   storage,
// };

// import { initAuth } from './auth/initAuth';
// import { initUser } from './user/initUser';

// const initState = {
//   auth: initAuth,
//   user: initUser,
// };

export const store = configureStore({
  // preloadedState: initState,
  devTools: true,
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
