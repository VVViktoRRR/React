import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {createAuto, updateById} from "../../store";
import {CarValidator} from "../../validators/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";

const Form = ({update}) => {
   const {updateCar} = useSelector(state => state['carReducer']);
   const {handleSubmit, register, reset, setValue, formState:{errors}}
         = useForm({resolver:joiResolver(CarValidator),mode: 'onTouched' });
   const dispatch = useDispatch();

   const submit = (data) => {
       if (updateCar === null){
           dispatch(createAuto({data}));
           update({data})
           reset()
           return
          }
       dispatch(updateById({id:updateCar.id, car:data}))
       update({data})
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
                <div>
                    <label style={{margin:'5px'}}/>
                    Model:
                    <input style={{margin:'5px'}} type='text' placeholder={'model'} {...register('model')}/>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>

                <div>
                    <label style={{margin:'5px'}}/>
                    Price:
                    <input style={{margin:'5px'}} type='text' placeholder={'price'} {...register('price')}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>

                <div>
                    <label style={{margin:'5px'}}/>
                    Year:
                    <input style={{margin:'5px'}} type='text' placeholder={'year'} {...register('year')}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>

                <button>Save</button>
          </form>

        </div>
    );
};

export {Form};