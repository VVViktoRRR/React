import {useReducer, useState} from "react";
import './App.css';
import  {Animals} from "./components";
import Form from "./components/form/Form";


const reduser = (state, action) => {
    switch (action.type){
        case "ADD_CAT":
            return {...state, cats:[...state.cats, action.payload.cat]}

        case "ADD_DOG":
            return {...state, dogs:[...state.dogs, action.payload.dog]}

        case "DEL_CAT":
            return {...state, cats:state.cats.filter(cat => cat.id!==action.payload.id)}

        case "DEL_DOG":
            return {...state, dogs:state.dogs.filter(dog => dog.id!==action.payload.id)}

        default:
            return state
    }
}
function App() {
    const [animals, dispatch] = useReducer(reduser, {cats: [], dogs: []})




    const getFormData = (data) => {
        dispatch( [...animals, {id:new Date().getTime(), ...data}])
    }
    const DEL = (id) => {
        dispatch(animals.filter(animal => animal.id !== id))
    }
    return (
        <div>
            <h1 style={{marginLeft: '350px'}}> Animals </h1>
                <Form getFormData={getFormData}/>
                <Animals animals={animals} DEL={DEL}/>
        </div>
    );
    }
    export default App;
