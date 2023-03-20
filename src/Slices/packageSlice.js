import { createSlice, createSelector, PayloadAction, createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";
import {authHeader} from '../services/authService';
const API_URL = process.env.REACT_APP_API_URL

export const getPackages = createAsyncThunk(
    "package/getPackages", async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL + "getPackages", {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const addPackage = createAsyncThunk(
    "package/addPackage", async ({name, limit, duration}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "addPackage", {
                name, limit, duration
            }, {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const updatePackage = createAsyncThunk(
    "package/updatePackage", async ({id, name, limit, duration}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "updatePackage", {
                id, name, limit, duration
            }, {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const deletePackage = createAsyncThunk(
    "package/deletePackage", async ({id}, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "deletePackage", {
                id
            }, {headers: authHeader()});
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const packageSlice = createSlice({
    name: "package",
    initialState: {
        packages: [],
    },
    reducers: {
        // clearErrorMsg(state, action) {
        //     state.errorMsg = ""
        // },
        // logOut(state, action) {
        //     localStorage.removeItem("user")
        //     state.currentUser = {}
        // },
        // setCurrentUser(state, action) {
        //     state.currentUser = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPackages.fulfilled, (state, {payload}) => {
            console.log('get packages = ', payload)
            state.packages = payload
        })
        .addCase(getPackages.rejected, (state, action) => {
            console.log('get packages error = ', action.error.message)
        })
        .addCase(addPackage.fulfilled, (state, {payload}) => {
            let statePackages = JSON.parse(JSON.stringify(state.packages));
            state.packages = [...statePackages, payload]
        })
        .addCase(addPackage.rejected, (state, action) => {
            console.log('add packages error = ', action.error.message)
        })
        .addCase(updatePackage.fulfilled, (state, {payload}) => {
            let statePackages = JSON.parse(JSON.stringify(state.packages));
            statePackages.forEach(e => {
                if (e._id === payload._id) {
                    e.name = payload.name
                    e.limit = payload.limit
                    e.duration = payload.duration
                    return
                }
            })
            state.packages = statePackages
        })
        .addCase(updatePackage.rejected, (state, action) => {
            console.log('update packages error = ', action.error.message)
        })
        .addCase(deletePackage.fulfilled, (state, {payload}) => {
            let statePackages = JSON.parse(JSON.stringify(state.packages));
            state.packages = statePackages.filter(e => e._id != payload)
        })
        .addCase(deletePackage.rejected, (state, action) => {
            console.log('delete packages error = ', action.error.message)
        })
    }
})
export const {} = packageSlice.actions;
export default packageSlice.reducer;