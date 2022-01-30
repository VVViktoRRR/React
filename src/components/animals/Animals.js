import React from 'react';
import Animal from "../animal/Animal";

const Animals = ({animals, DEL}) => {
    console.log(animals)
    return (
        <div>
            {
                animals.map(animal => <Animal key={animal.id} animal={animal} DEL={DEL}/>)
            }
        </div>
    );
};

export {Animals};