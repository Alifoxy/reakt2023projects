import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getCars} from "../../services/api/getInfo/getCarInfo";

const initialState = {
    cars: [],
    errors: null,
    loading: null,
    updateCar: null,
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await getCars.getAll();
            return data
        }catch (error){
            rejectWithValue(error.response.data);
        }

    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await getCars.create(car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await getCars.deleteById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await getCars.updateById(id, car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        set_updateCar:(state,action)=>{
            state.updateCar=action.payload
        }
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.loading=false
            state.posts=action.payload
        },
        [getAll.rejected]:(state,action)=>{
            state.loading=false
            state.errors=action.payload
        },
        [getAll.pending]:(state)=>{
            state.loading=true
        },

    }
});




const {reducer:carReducer,actions:{set_updateCar}}= carSlice;

const carActions = {getAll,set_updateCar,create,updateById,deleteById};

export{carReducer,carActions};