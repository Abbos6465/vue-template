import axios from "axios";
import type {AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {useAuthStore} from "@/stores/auth.store";
import {getAccessToken} from "@/utils/local.storage";

const {clearUser} = useAuthStore();

const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.API_URL,
    timeout: 60000
});

axiosInstance.interceptors.request.use(
    (config:InternalAxiosRequestConfig<any>) => {

        const accessToken: string | null = getAccessToken();
        if (accessToken != null) config.headers['Authorization'] = 'Bearer ' + accessToken;

        return config;
    },

    (error) => {
        if (error.response?.status === 401) {
            clearUser();
        }

        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    ({data}) => {
        return data;
    },

    (error) => {
        if (error.response && error.response.status === 401) {
            clearUser();
        }

        return Promise.reject(error.response)
    }
)
export default axiosInstance