import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    // baseURL: "https://robotictrader.online/api"
    baseURL: "https://skillinginvest.app/api"
    // baseURL: "http://localhost:5000"
})

api.interceptors.request.use(function (config) {
    const token = getToken()
    if (token) {
        config.headers!.Authorization = `Bearer ${token}`
    }
    return config
})

export default api