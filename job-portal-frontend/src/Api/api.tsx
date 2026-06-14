import axios, {InternalAxiosRequestConfig} from "axios";
import store from "../Store/reducers/store";
import {redirectTo} from "./navigationService";

// @ts-ignore
const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/`,
});
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("jwt");
        if (token) {
            const cleanToken = token.replace(/^"|"$/g, ''); // remove surrounding quotes
            config.headers.Authorization = `Bearer ${cleanToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
            localStorage.removeItem("profile");
            store.dispatch({ type: "LOGOUT_USER" });
            store.dispatch({ type: "REMOVE_JWT" });
            store.dispatch({ type: "GET_PROFILE", payload: null });
            redirectTo("/login");
        }
        return Promise.reject(error);
    }
);

export default api;