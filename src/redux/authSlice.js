import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        hasLoggedIn: false,
    },
    reducers: {
        login: (state) => {
            state.hasLoggedIn = true
        },
        logout: (state) => {
            state.hasLoggedIn = false
        },
    },
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;