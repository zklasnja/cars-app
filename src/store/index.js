import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice';
import userReducer from './user/slice';

export default configureStore({
  reducer: {
    cars: carsReducer,
    user: userReducer,

  },
});
