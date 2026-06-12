import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authReducer";
import {profileReducer} from "./profileReducer";
import {talentsReducer} from "./talentsReducer";

const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    :  null;

const profile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    :  null;
const talents = localStorage.getItem("talents")
    ? JSON.parse(localStorage.getItem("talents"))
    :  null;

const initialState =  {
    auth: {user: user},
    profile: profile ? { profile: profile } : { profile: null },
    talents: talents ? { talents: talents } : { talents: null },
}
const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        talents: talentsReducer,
    },
    preloadedState: initialState,
})

export default store;