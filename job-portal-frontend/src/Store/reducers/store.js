import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authReducer";

const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    :  null;

const initialState =  {
    auth: {user: user},
}
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: initialState,
})

export default store;