import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {addCar, createAuto} from "../../store";

const Form = () => {
   const {handleSubmit, register, reset} = useForm();
   const dispatch = useDispatch();

   const submit = (data) => {
     dispatch(createAuto({data}))
      reset()
   }
    return (
        <div>
            <form style={{margin:'50px'}} onSubmit={handleSubmit(submit)} >
                <label style={{margin:'5px'}}>Model:<input style={{margin:'5px'}} type='text' {...register('model')}></input></label>
                <label style={{margin:'5px'}}>Price:<input style={{margin:'5px'}} type='text' {...register('price')}></input></label>
                <label style={{margin:'5px'}}>Year:<input style={{margin:'5px'}} type='text' {...register('year')}></input></label>
                <button>Save</button>
            </form>

        </div>
    );
};

export {Form};