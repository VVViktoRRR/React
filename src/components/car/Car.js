import React from 'react';
import {useDispatch} from "react-redux";

import {delCar, deleteAuto} from "../../store";

const Car = ({car:{id, model, price, year}}) => {
    const dispatch = useDispatch()
    return (
        <div style={{border:'2px solid blue', margin:'10px', width: '20%', padding:'5px', display:'flex'}}>
            <div>
                <div style={{margin:'20px'}}> Model:  {model}</div>
                <div style={{margin:'20px'}}> Price: {price}</div>
                <div style={{margin:'20px'}}> Year: {year}</div>
            </div>
            <button style={{height:'50px', marginTop:'50px'}} onClick={()=> dispatch(deleteAuto( {id}))}> Delete</button>
        </div>
    );
};

export {Car};