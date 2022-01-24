import {axiosServices} from "./axios.services";

import {urls} from "../config/urls";

export const postServices = {
    getAllPosts:() => axiosServices.get(urls.posts).then(value => value.data),
    getByPostId:(id) => axiosServices.get(`${urls.posts}/${id}`).then(value => value.data),
    getByPostComments:(id) => axiosServices.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}