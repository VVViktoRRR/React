import axios from "axios";
import baseURL from "../config/placeholder.urls";


export const placeholderAxiosServices = axios.create({baseURL});