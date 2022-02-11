import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userPostsCommentsServices} from "../services";

export const getPostsAll = createAsyncThunk(
    'postsSlice/getPostsAll',
    async (_, {rejectWithValue }) => {
        try {
            const posts = await userPostsCommentsServices.getAllPosts()
            return posts
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const initialState = {
    posts: [],
}
const postsSlice = createSlice( {
    name: 'postsSlice',
    initialState,
    reducers: {
    },
    extraReducers:{
        [getPostsAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        },
    },
})

const postsReducer = postsSlice.reducer

export default postsReducer