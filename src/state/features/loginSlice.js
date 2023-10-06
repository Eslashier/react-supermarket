import { possibleStatus } from "../../config/possibleStatus";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../actions/users/login";

const initialState = {
    isLogged: false,
    status: possibleStatus.IDLE,
    error: null,
}


const loginSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLogged = false;
        },

    },
    extraReducers: (builder) => {
        //LOGIN
        builder.addCase(login.fulfilled, (state) => {
            state.status = possibleStatus.COMPLETED;
            state.isLogged = true;
        })
    }
})

export default loginSlice.reducer

export const selectLoginState = () => (state) => state.login.isLogged
export const selectLoginStatus = () => (state) => state.login.status
export const selectLoginFetchError = () => (state) => state.login.error

export const { logout } = loginSlice.actions;

