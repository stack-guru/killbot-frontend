import { createSlice, createSelector, PayloadAction, createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";
import {authHeader} from '../services/authService';
const API_URL = process.env.REACT_APP_API_URL

export const getShortlinks = createAsyncThunk(
    "shortlink/getShortlinks", async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL + "getShortlinks", {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const addShortlink = createAsyncThunk(
    "shortlink/addShortlink", async ({url, keyname}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "addShortlink", {
                url, keyname
            }, {headers: authHeader()});
            return response.data;
        } catch (error) {
            const response = error?.response?.data || ""
            return thunkAPI.rejectWithValue({ error: error.message, response });
        }
    }
);

export const deleteShortlink = createAsyncThunk(
    "shortlink/deleteShortlink", async ({id}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "deleteShortlink", {
                id
            }, {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const shortlinkSlice = createSlice({
    name: "shortlink",
    initialState: {
        linkList: [],
        duplicateErr: "",
        urlErr: ""
    },
    reducers: {
        clearErrorMsg(state, action) {
            state.duplicateErr = ""
            state.urlErr = ""
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getShortlinks.fulfilled, (state, {payload}) => {
            state.linkList = payload
        })
        .addCase(getShortlinks.rejected, (state, action) => {
            console.log('get shortlinks error = ', action.error.message)
        })
        .addCase(addShortlink.fulfilled, (state, {payload}) => {
            let stateShortlinks = JSON.parse(JSON.stringify(state.linkList));
            state.linkList = [...stateShortlinks, payload]
        })
        .addCase(addShortlink.rejected, (state, action) => {
            console.log('add shortlink error = ', action.error.message)
            const msg = action.payload?.response || action.payload.error
            if (msg.includes('duplicate')) {
                state.duplicateErr = msg
            } else {
                state.urlErr = msg
            }
        })
        .addCase(deleteShortlink.fulfilled, (state, {payload}) => {
            let stateShortlinks = JSON.parse(JSON.stringify(state.linkList));
            stateShortlinks = stateShortlinks.filter(e => e._id != payload)
            state.linkList = stateShortlinks
        })
        .addCase(deleteShortlink.rejected, (state, action) => {
            console.log('delete shortlink error = ', action.error.message)
        })
    }
})
export const {clearErrorMsg} = shortlinkSlice.actions;
export default shortlinkSlice.reducer;