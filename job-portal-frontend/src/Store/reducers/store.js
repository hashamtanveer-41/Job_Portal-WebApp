import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authReducer";
import {profileReducer} from "./profileReducer";

const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    :  null;

const profile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    :  null;

const initialState =  {
    auth: {user: user},
    profile: profile ? { profile: profile } : { profile: null },
}
const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    },
    preloadedState: initialState,
})

export default store;