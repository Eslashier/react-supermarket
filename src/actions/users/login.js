import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../config/urlConfig";
import bcrypt from "bcryptjs";

const getUsersUrl = urlApi + "/users";

export const login = createAsyncThunk('getUser', async (payload) => {
    const { email, password } = payload;
    const response = await fetch(`${getUsersUrl}?email_like=${email}`)
    const body = await response.json();
    const { salt } = body[0];

    const hashedPassword = bcrypt.hashSync(password, salt);

    const isPasswordCorrect = hashedPassword === body[0].password;

    if (body[0].email === email && isPasswordCorrect) {
        return true;
    }
    
    throw new Error('invalid credentials');
})