import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
    created_at: "",
    updated_at: "",
    id: "",
    token: localStorage.getItem("token"),
  },
  reducers: {
    toLogin: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    refresh: (state, action) => {
      state.token = action.payload.token;
    },
    toRegister: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: () => {},
  },
});

export const { toLogin, logout, refresh, toRegister } = userSlice.actions;

export default userSlice.reducer;
