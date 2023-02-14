import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getCars} from "../../services/additionalServices/carService/getCarInfo";

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
);

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
);

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
);

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        set_updateCar:(state,action)=>{
            state.updateCar=action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
});


const {reducer:carReducer,actions:{set_updateCar}}= carSlice;

const carActions = {getAll,set_updateCar,create,updateById,deleteById};

export{carReducer,carActions};