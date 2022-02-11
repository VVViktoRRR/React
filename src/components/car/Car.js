import React from 'react';
import {useDispatch} from "react-redux";

import {delCar, deleteAuto, updateToCar} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    console.log(id)
    const dispatch = useDispatch()
    return (
        <div style={{border:'2px solid red', margin:'20px', width: '20%', padding:'5px', display:'flex'}}>
            <div>
                <div style={{margin:'20px'}}> Model:  {model}</div>
                <div style={{margin:'20px'}}> Price: {price}</div>
                <div style={{margin:'20px'}}> Year: {year}</div>
            </div>
            <button style={{height:'50px', marginTop:'50px'}} onClick={()=> dispatch(deleteAuto( {id}))}> Delete</button>
            <button style={{marginLeft:'20px'}}  onClick={()=> dispatch(updateToCar( {car}))}>Update</button>
        </div>
    );
};

export {Car};