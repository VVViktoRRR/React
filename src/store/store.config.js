import {configureStore} from "@reduxjs/toolkit"
import carReducer from "./car.slice";

const store = configureStore( {
    reducer:{
      carReducer
    }
})

export default store