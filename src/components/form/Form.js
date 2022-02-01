import React, {useReducer, useRef} from 'react';

const Form = ({dispatch}) => {
    const catInput = useRef();
    const dogInput = useRef();

    const form = (e) => {
        e.preventDefault()
        e.target.reset()
    }
    const  addCat =()=> {
        dispatch({type:"ADD_CAT", payload:{cat:catInput.current.value}})
      }

   const addDog =()=> {
        dispatch({type:"ADD_DOG", payload:{dog:dogInput.current.value}})
      }

    return (
        <div>
            <form onSubmit={form} style={{padding:'10px'}}>
                <label style={{marginLeft:'50px'}}>
                    Cat:
                    <input type={'text'} ref={catInput} placeholder={'name _____'} ></input></label>
                <button onClick={addCat}> add</button>
                <label style={{marginLeft:'50px'}}>
                    Dog:
                    <input input type={'text'} ref={dogInput} placeholder={'name ______'} ></input></label>
                <button onClick={addDog}> add</button>
            </form>
        </div>
    );
};

export {Form};