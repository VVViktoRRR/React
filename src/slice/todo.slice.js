import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

const todoSlice = createSlice( {
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo:(state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false})
        },
        changeTodo: ((state, action) => {
          const find = state.todos.find(todo => todo.id === action.payload.id)
            find.status = !find.status
        }),
        deleteTodo: ((state, action) => {
           state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        })
    }
})

const todoReducer = todoSlice.reducer

export const {addTodo, changeTodo, deleteTodo} = todoSlice.actions
export default todoReducer