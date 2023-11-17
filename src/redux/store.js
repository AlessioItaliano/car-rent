import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { carsReducer } from './cars/carsSlice';

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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
