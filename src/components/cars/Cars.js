import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllAuto} from "../../store";
import {Car} from "../car/Car";

const Cars = ({trigger}) => {
   const {cars, status, error} = useSelector(state => state['carReducer']);
   const dispatch = useDispatch()
   useEffect(() => {
       dispatch(getAllAuto())
   }, [trigger])
    return (
        <div style={{display:'flex', width:'98%', flexWrap:'wrap'}}>

            {status === 'pending' && <h1> Loading.....</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};