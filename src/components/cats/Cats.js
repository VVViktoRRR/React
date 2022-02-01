import React from 'react';
import {Cat} from "../cat/Cat";

const Cats = ({cats, dispatch}) => {
    return (
        <div>
            {cats.map(cat =><Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};