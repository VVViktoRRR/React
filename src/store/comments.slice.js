import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userPostsCommentsServices} from "../services";


export const getCommentsAll = createAsyncThunk(
    'commentsSlice/getCommentsAll',
    async (_,{rejectWithValue}) => {
       try {
           const comments = await userPostsCommentsServices.getAllComments();
           console.log(comments)
           return comments
       } catch (e) {
           return rejectWithValue(e.message)
       }
    }
)
const initialState = {
    comments: [],
}
const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {},
    extraReducers:{
        [getCommentsAll.fulfilled]: (state, action) => {
         state.status = 'fulfilled';
         state.comments = action.payload;
        },
    },
})
const commentsReducer = commentsSlice.reducer

export default commentsReducer