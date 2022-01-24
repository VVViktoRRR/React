import {axiosServices} from "./axios.services";

import {urls} from "../config/urls";

export const userServices = {
    getAllUsers:() => axiosServices.get(urls.users).then(value => value.data),
    getByUserId:(id) => axiosServices.get(`${urls.users}/${id}`).then(value => value.data),
    getByUserPosts:(id) => axiosServices.get(`${urls.users}/${id}/posts`).then(value => value.data)
}