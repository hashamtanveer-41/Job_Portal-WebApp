import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authReducer";
import {profileReducer} from "./profileReducer";
import {filterReducer} from "./filterReducer";
import {sortReducer} from "./sortReducer";
import {jwtReducer} from "./jwtReducer";

const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    :  null;

const profile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    :  null;

const initialState =  {
    auth: {user: user},
    profile: profile ? { profile: profile } : { profile: null },
    jwt: { jwt: localStorage.getItem("jwt") || null },
}
const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        filter: filterReducer,
        sort: sortReducer,
        jwt: jwtReducer,
    },
    preloadedState: initialState,
})

export default store;