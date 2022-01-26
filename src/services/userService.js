import {urls} from "../config/urls";
import {axiosService} from "./axiosService";


export const userService = {
    getAllUsers:()=> axiosService.get(urls.users).then(value => value.data),
    getByUserId:(id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getByUserPosts:(id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}