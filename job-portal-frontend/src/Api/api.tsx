import axios, {InternalAxiosRequestConfig} from "axios";

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

export default api;