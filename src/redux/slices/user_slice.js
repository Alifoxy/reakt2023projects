import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getUsers} from "../../services/api/getInfo/getUsersInfo";


const initialState = {
        users:[],
        errors:null,
        loading:null,
        selectedUser:null
};

const getAll = createAsyncThunk(
    "userSlice/getAll",
    async (_,{rejectWithValue})=>{
        try{
                const {data} = await getUsers.getAll();
                return data
        }catch (error){
                rejectWithValue(error.response.data);
        }

    }
);

const getById = createAsyncThunk(
    "userSlice/getById",
    async ({id},{rejectWithValue})=>{
            try{
                    const {data} = await getUsers.getById(id);
                    return data
            }catch (error){
                    rejectWithValue(error.response.data);
            }

    }
);

const userSlice = createSlice({
        name:"userSlice",
        initialState,
        reducers:{
                set_selectedUser:(state,action)=>{
                        state.selectedUser=action.payload
                }
        },
        extraReducers:{
                [getAll.fulfilled]:(state,action)=>{
                        state.loading=false
                        state.users=action.payload
                },
                [getAll.rejected]:(state,action)=>{
                        state.loading=false
                        state.errors=action.payload
                },
                [getAll.pending]:(state)=>{
                        state.loading=true
                },
                [getById.fulfilled]:(state,action)=>{
                        state.selectedUser=action.payload
                }
        }
});

const {reducer:userReducer,actions:{set_selectedUser}}= userSlice;

const userActions = {getAll,set_selectedUser,getById};

export{userReducer,userActions,userSlice};