import axios, {InternalAxiosRequestConfig} from "axios";

// @ts-ignore
const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/`,
    withCredentials: true,
});

export default api;