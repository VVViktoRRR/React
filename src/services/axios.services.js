import axios from "axios";
import baseUrl from "../configs/urls"

export const axiosService = axios.create({
    baseURL:baseUrl
});