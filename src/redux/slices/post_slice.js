import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null,
};

const getAll = createAsyncThunk(
    "postSlice/getAll",
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await getPosts.getAll();
            return data
        }catch (error){
            rejectWithValue(error.response.data);
        }

    }
);

const getById = createAsyncThunk(
    "postSlice/getById",
    async ({id},{rejectWithValue})=>{
        try{
            const {data} = await getPosts.getById(id);
            return data
        }catch (error){
            rejectWithValue(error.response.data);
        }

    }
);
const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        set_selectedPost:(state,action)=>{
            state.selectedPost=action.payload
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
        [getById.fulfilled]:(state,action)=>{
            state.selectedPost=action.payload
        }
    }
});




const {reducer:postReducer,actions:{set_selectedPost}}= postSlice;

const postActions = {getAll,set_selectedPost,getById};

export{postReducer,postActions};