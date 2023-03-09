import { createSlice, createSelector, PayloadAction, createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";
import {decodeUserToken, authHeader} from '../services/authService';
const API_URL = process.env.REACT_APP_API_URL

export const signUp = createAsyncThunk(
    "user/signUp", async({name, email, password}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "register", {
                name, email, password
            });
            return response.data
        } catch (error) {
            const response = error?.response?.data || ""
            return thunkAPI.rejectWithValue({ error: error.message, response });
        }
    }
);

export const login = createAsyncThunk(
    "user/login", async({email, password}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "login", {
                email, password
            })
            return response.data
        } catch(error) {
            const response = error?.response?.data || ""
            return thunkAPI.rejectWithValue({ error: error.message, response });
        }
    }
);

export const getUsers = createAsyncThunk(
    "user/getUsers", async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL + "getUsers", {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const getApiKey = createAsyncThunk(
    "user/getApiKey", async ({email}, thunkAPI) => {
        try {
            const response = await axios.get(API_URL + "getApiKey?email=" + email, {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const generateApikey = createAsyncThunk(
    "user/generateApikey", async({email}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "generateApikey", {
                email
            })
            return response.data
        } catch(error) {
            const response = error?.response?.data || ""
            return thunkAPI.rejectWithValue({ error: error.message, response });
        }
    }
);

const usersSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        currentUser: {},
        errorMsg: "",
        apiKey: ""
    },
    reducers: {
        clearErrorMsg(state, action) {
            state.errorMsg = ""
        },
        logOut(state, action) {
            localStorage.removeItem("user")
            state.currentUser = {}
        },
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.fulfilled, (state, {payload}) => {
            console.log('success get user = ', payload)
            state.users = payload
        })
        .addCase(getUsers.rejected, (state, action) => {
            console.log('get users error = ', action.error.message)
        })
        .addCase(signUp.fulfilled, (state, {payload}) => {
            localStorage.setItem("user", payload);
            state.currentUser = decodeUserToken(payload)
        })
        .addCase(signUp.rejected, (state, action) => {
            console.log('signup error = ', action)
            state.errorMsg = action.payload?.response || action.payload.error
        })
        .addCase(login.fulfilled, (state, {payload}) => {
            localStorage.setItem("user", payload);
            state.currentUser = decodeUserToken(payload)
        })
        .addCase(login.rejected, (state, action) => {
            console.log('login error = ', action.error.message)
            state.errorMsg = action.payload?.response || action.payload.error
        })
        .addCase(generateApikey.fulfilled, (state, {payload}) => {
            state.apiKey = payload
        })
        .addCase(generateApikey.rejected, (state, action) => {
            console.log('generate api key error = ', action.error.message)
        })
        .addCase(getApiKey.fulfilled, (state, {payload}) => {
            state.apiKey = payload
        })
        .addCase(getApiKey.rejected, (state, action) => {
            console.log('get api key error = ', action.error.message)
        })
    }
})
export const {logOut, clearErrorMsg, setCurrentUser} = usersSlice.actions;
export default usersSlice.reducer;