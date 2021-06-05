import { configureStore } from '@reduxjs/toolkit';
import MoviesReducer from './moviesReducer';

export const store = configureStore({
  reducer: {
    moviesReducer: MoviesReducer,
  },
});
