import {placeholderAxiosServices} from "./placeholder.axios.services";

import {plurls} from "../config";


export const userPostsCommentsServices = {
    getAllUsers:()=> placeholderAxiosServices.get(plurls.users).then(value => value.data),
    getUserById:(id) => placeholderAxiosServices.get(`${plurls.users}/${id}`).then(value => value.data),

    getAllPosts:()=> placeholderAxiosServices.get(plurls.posts).then(value => value.data),
    getPostsById:(id) => placeholderAxiosServices.get(`${plurls.posts}/${id}`).then(value => value.data),

    getAllComments:()=> placeholderAxiosServices.get(plurls.comments).then(value => value.data),
    getCommentsById:(id) => placeholderAxiosServices.get(`${plurls.comments}/${id}`).then(value => value.data),
}