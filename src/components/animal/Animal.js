import React from 'react';

const Animal = ({animal:{id, cat, dog}, DEL}) => {
    return (
    <div style={{display:'flex', width:'100%'}}>
        <div style={{width:'45%', margin:'10px',background:'silver'}}>
            {cat && ( <div style={{width:'20%',marginLeft:'20px'}}>
                Cat:  {cat}
            <button onClick={()=> DEL(id)}> Delete</button></div>)}
        </div>
        <div style={{width:'45%', margin:'10px', background:'yellow'}}>
            {dog && ( <div style={{width:'20%',marginLeft:'20px'}}>
                Dog:  {dog}
            <button onClick={()=> DEL(id)}> Delete</button></div>)}
        </div>
    </div>
    );
};

export default Animal;