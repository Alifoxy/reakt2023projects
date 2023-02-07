import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user_slice";
import {postReducer} from "./slices/post_slice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export default setupStore;