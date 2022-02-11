import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userPostsCommentsServices} from "../services";

export const getUsersAll = createAsyncThunk(
    'usersSlice/getUsersAll',
    async (_, {rejectWithValue }) => {
       try {
           const users = await userPostsCommentsServices.getAllUsers()
           return users
       } catch (e) {
           return rejectWithValue(e.message)
       }
    }
)
const initialState = {
    users: [],
 }
const usersSlice = createSlice( {
    name: 'usersSlice',
    initialState,
    reducers: {
   },
   extraReducers:{
       [getUsersAll.fulfilled]: (state, action) => {
           state.status = 'fulfilled';
           state.users = action.payload;
       },
   },
})

const usersReducer = usersSlice.reducer


export default usersReducer