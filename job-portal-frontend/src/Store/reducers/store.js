import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authReducer";

const initialState =  {
}
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: initialState,
})

export default store;