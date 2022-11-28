import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: null,
    searchTerm: "",
  },
  reducers: {
    getAll: (state, action) => {
      state.cars = action.payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { getAll, setSearchTerm } = carsSlice.actions;

export default carsSlice.reducer; // reducer

export const selectAllCars = (state) => state.cars;

export const selectCarById = (state, carId) =>
  state.cars.find((car) => car.id === carId);
