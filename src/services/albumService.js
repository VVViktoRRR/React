import {urls} from "../config/urls";
import {axiosService} from "./axiosService";


export const albumService = {
    getAllUsersAlbum:(id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getByAlbumPhotos:(id) => axiosService.get(`${urls.users}/${id}/photos`).then(value => value.data)
}