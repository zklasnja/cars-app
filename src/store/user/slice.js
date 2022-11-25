import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userEmail: null,
        token: localStorage.getItem('token'),
    },
    reducers: {
        login: (state, action) => {
            state.userEmail = action.payload.email;
        },
        // refresh: (state) => {
        //     state.token = action.payload.token;
        // }
    }
});

export const { login, logout, refresh } = userSlice.actions;

export default userSlice.reducer;
