import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../slice/todo.slice";

const store = configureStore( {
    reducer: {
        todoReducer
    }
})
 export default store