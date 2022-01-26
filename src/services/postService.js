import {urls} from "../config/urls";
import {axiosService} from "./axiosService";

export const postService = {
    getAllPosts:() => axiosService.get(urls.posts).then(value => value.data),
    getByPostId:(id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getByPostComments:(id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}