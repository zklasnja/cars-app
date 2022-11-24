import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userEmail: null,
    },
    reducers: {
        login: (state, action) => {
            state.userEmail = action.payload.email;
        },
        logout: (state) => {
            state.userEmail = null;
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
