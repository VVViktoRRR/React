import React from 'react';
import {useDispatch} from "react-redux";

import css from './Todo.module.css'
import {changeTodo, deleteTodo} from "../../slice/todo.slice";

const Todo = ({todo}) => {
    const {id, name, status} = todo
    const dispatch = useDispatch()
    return (
        <div className={css.Todo}>
            <input type="checkbox" onChange={()=> dispatch(changeTodo({id}))} />
            <div className={status? css.find: ''}>{name}</div>
            <button onClick={()=> dispatch(deleteTodo({id}))}> Delete </button>
        </div>
    );
};

export {Todo};