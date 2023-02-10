import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices/car_slice";

const rootReducer = combineReducers({
    cars: carReducer,
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export default setupStore;