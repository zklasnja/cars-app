import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
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
    setToken: (state, { payload }) => {
      state.token = payload.token;
    },
    toRegister: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: () => {},
    setUser: (state, { payload }) => {
      state.name = payload.user.name;
      state.email = payload.user.email;
      state.id = payload.user.id;
      state.created_at = payload.user.created_at;
      state.updated_at = payload.user.updated_at;
      state.token = payload.authorisation.token;
    },
  },
});

export const { toLogin, logout, setToken, toRegister, setUser } =
  userSlice.actions;

export default userSlice.reducer;
