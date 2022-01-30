import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({getFormData}) => {
    const {handleSubmit, register, reset } = useForm()
    const formAnimal = (data) => {
        getFormData(data)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(formAnimal)}>
                <label style={{marginLeft: '50px'}}> Name Cat: <input type="text" {...register('cat')} /></label>
                <button style={{marginLeft: '20px', background: 'silver', borderRadius: '20px'}}> add </button>
                <label style={{marginLeft: '50px'}}> Name Dog: <input type="text" {...register('dog')} /></label>
                <button style={{marginLeft: '20px', background: 'silver', borderRadius: '20px'}}> add </button>
            </form>
        </div>
    );
};


export default Form;