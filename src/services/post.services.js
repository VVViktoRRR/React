import {axiosService} from "./axios.services";
import {urls} from "../configs/urls";

export  const postServices = {
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}