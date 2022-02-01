import React from 'react';

const Animals = (state, action) => {
    switch (action.type) {
        case "ADD_CAT":
            return {...state, cats:[...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case "ADD_DOG":
            return {...state, dogs:[...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
        case "DEL_CAT":
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case "DEL_DOG":
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        default:
            return state
      }
    };

export {Animals};