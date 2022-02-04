import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../car/Car";
import {getAllAuto} from "../../store";

const Cars = () => {
   const {cars, status, error} = useSelector(state => state['carReducer']);
   const dispatch = useDispatch()
   useEffect(() => {
       dispatch(getAllAuto())
   }, [])
    return (
        <div style={{display:'flex', width:'98%', flexWrap:'wrap'}}>

            {status === 'pending' && <h1> Loading.....</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};