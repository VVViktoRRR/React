import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import {carServices} from "../services";

export const getAllAuto = createAsyncThunk(
    'carSlice/getAllAuto',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carServices.getAllCars()
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const createAuto = createAsyncThunk(
    'carSlice/createAuto',
    async ({data}, {dispatch})=>{
        try {
            const newCar = await carServices.createCar(data);
            dispatch(addCar({data: newCar}))
        }
        catch (e) {
            console.log(e)
        }
    }
)
export const deleteAuto = createAsyncThunk(
           'carSlice/deleteAuto',
    async ({id}, {dispatch}) => {
       try {
         await carServices.deleteCarById(id)
         dispatch(delCar({id}))
       }
        catch (e) {
            console.log(e)
        }
    }
)

const carSlice = createSlice( {
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        delCar:(state, action)=> {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers:{
        [getAllAuto.pending]:(state, action)=>{    // начало запроса - но не получив данные
            state.status = 'pending'
            state.error = null
        },
        [getAllAuto.fulfilled]:(state, action)=>{  //  когда данные пришли - можно использовать
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllAuto.rejected]:(state, action)=>{   //  когда  бэк ответил ошибкой
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const carReducer = carSlice.reducer

export const {addCar, delCar} = carSlice.actions;
export default carReducer