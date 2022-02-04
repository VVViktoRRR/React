import axios from "axios";
import baseURL from "../config/urls";

export const axiosServices = axios.create({baseURL});