import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {createAuto, updateById} from "../../store";

const Form = () => {
   const {updateCar} = useSelector(state => state['carReducer']);
   const {handleSubmit, register, reset, setValue} = useForm();
   const dispatch = useDispatch();

   const submit = (data) => {
       if (updateCar === null){
           dispatch(createAuto({data}));
           reset()
           return
          }
       dispatch(updateById({id:updateCar.id, car:data}))
       reset();
         }
        useEffect(()=>{
        if (updateCar){
            setValue('model', updateCar.model);
            setValue('price', updateCar.price);
            setValue('year', updateCar.year);
        }
    }, [updateCar])

    return (
        <div>
            <form style={{margin:'50px'}} onSubmit={handleSubmit(submit)} >
                <label style={{margin:'5px'}}/>
                    Model:
                <input style={{margin:'5px'}} type='text' placeholder={'model'} {...register('model')}/>
                <label style={{margin:'5px'}}/>
                    Price:
                <input style={{margin:'5px'}} type='text' placeholder={'price'} {...register('price')}/>
                <label style={{margin:'5px'}}/>
                    Year:
                <input style={{margin:'5px'}} type='text' placeholder={'year'} {...register('year')}/>
                <button>Save</button>
          </form>

        </div>
    );
};

export {Form};
