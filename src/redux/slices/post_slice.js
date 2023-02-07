import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        users:[],
        errors:null,
        loading:null
};

const postSlice = createSlice({
        name:"postSlice",
        initialState,
        reducers:{
               getAll:(state,action)=>{
                 state.users = action.payload
                }
        }
});
const {reducer:postReducer,actions:{getAll}}= postSlice;

const postActions = {getAll};

export{postReducer,postActions};