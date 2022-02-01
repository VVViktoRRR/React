import React from 'react';

const Cat = ({cat:{id, name}, dispatch}) => {
    const delCat =(id) => {
        dispatch({type: "DEL_CAT", payload: {id}})
    }
    return (
        <div style={{marginLeft:'80px'}}>
            {name}
            <button style={{marginLeft:'10px'}} onClick={()=>delCat(id)}> Delete</button>
        </div>
    );
};

export {Cat};