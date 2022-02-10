import React, {useState} from 'react';
import {Cars, Form} from "../../components";

const CarsPage = () => {
    const [trigger, setTrigger] = useState()
    const [cars, setCars] = useState( []);
    const update = data => {
        setTrigger(data)
    }
    return (
        <div>
            Cars

            <Form update={update}/>
            <Cars trigger={trigger}/>
        </div>
    );
};

export {CarsPage};