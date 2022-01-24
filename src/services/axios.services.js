import axios from "axios";

import baseUrl from "../config/urls";

export const axiosServices = axios.create({
    baseURL:baseUrl
})