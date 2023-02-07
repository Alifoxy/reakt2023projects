import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        users:[],
        errors:null,
        loading:null,
        selectedUser:null
};

const userSlice = createSlice({name:"userSlice",
        initialState,
        reducers:{
                getAll:(state,action)=>{
                        state.users=action.payload
                },
                set_selectedUser:(state,action)=>{
                        state.selectedUser=action.payload

                }
        }});
const {reducer:userReducer,actions:{getAll,set_selectedUser}}= userSlice;

const userActions = {getAll,set_selectedUser};

export{userReducer,userActions};