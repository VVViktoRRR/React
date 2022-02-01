import React from 'react';

const Dog = ({dog:{id, name}, dispatch}) => {
    const delDog = (id) => {
        dispatch({type: "DEL_DOG", payload: {id}})
    }
    return (
        <div style={{marginLeft:'100px'}}>
            {name}
            <button style={{marginLeft:'10px'}} onClick={()=> delDog(id)}> Delete</button>
        </div>
    );
};

export {Dog};