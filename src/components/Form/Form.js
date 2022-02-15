import React from 'react';
import {useDispatch} from "react-redux";

import css from './Form.module.css'
import {addTodo} from "../../slice/todo.slice";

const Form = () => {
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault()
        dispatch(addTodo({todo: e.target.todo.value}))
        e.target.reset()
    }

    return (
        <div className={css.from}>
            <form onSubmit={submit}>
            <input type="text" name={'todo'}  />
            <button> Save </button>

            </form>
        </div>
    );
};

export {Form};