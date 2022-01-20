import {axiosService} from "./axios.services"

import {urls} from "../configs/urls";

export const userService = {
    getAll:() => axiosService.get(urls.users).then(value => value.data)
}