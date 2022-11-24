import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: null,
},
  reducers: {
   getAll: (state, action) => {
    state.data = action.payload;
   }
  }
});

export const { getAll } = carsSlice.actions;

export default carsSlice.reducer; // reducer

export const selectAllCars = state => state.cars;

export const selectCarById = (state, carId) => state.cars.find(car => car.id === carId);