import {axiosServices} from "./axios.services";

import {urls} from "../config";

export const carServices = {
    getAllCars:()=> axiosServices.get(urls.cars).then(value => value.data),
    createCar:(car)=> axiosServices.post(urls.cars, car).then(value => value.data),
    deleteCarById:(id)=> axiosServices.delete(`${urls.cars}/${id}`)
}