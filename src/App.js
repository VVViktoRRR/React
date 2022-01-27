import './App.css';
import {useReducer} from "react";

const reducer = ( state, action) => {
    switch (action.type){
        case 'inc':
            return {...state, count1: state.count1 +1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'inc+2':
            return {...state, count2: state.count2 +2}
        case 'dec-2':
            return {...state, count2: state.count2 - 2}
        case 'reset2':
            return {...state, count2: 0}
        case 'inc+5':
            return {...state, count3: state.count3 +5}
        case 'dec-5':
            return {...state, count3: state.count3 - 5}
        case 'reset3':
            return {...state, count3: 0}
        default:
            throw new Error('Error')
            }
        }
    function App() {
    const [state, dispatch] = useReducer(reducer,{count1:0, count2:0, count3:0});

      return (
        <div className={'wrap'}>
            <div className={'wrap_body'}>
                <div className={'wrap_box'}>
                    <div className={'counter'}> {state.count1}</div>
                    <button onClick={()=> dispatch({type:'inc'})}>INC + 1</button>
                    <button onClick={()=> dispatch({type:'dec'})}>DEC - 1</button>
                    <button onClick={()=> dispatch({type:'reset'})}>RESET</button>
                </div>
                <div className={'wrap_box'}>
                    <div className={'counter'}> {state.count2}</div>
                    <button onClick={()=> dispatch({type:'inc+2'})}>INC + 2</button>
                    <button onClick={()=> dispatch({type:'dec-2'})}>DEC - 2</button>
                    <button onClick={()=> dispatch({type:'reset2'})}>RESET</button>
                </div>
                <div className={'wrap_box'}>
                    <div className={'counter'}> {state.count3}</div>
                    <button onClick={()=> dispatch({type:'inc+5'})}>INC + 5</button>
                    <button onClick={()=> dispatch({type:'dec-5'})}>DEC - 5</button>
                    <button onClick={()=> dispatch({type:'reset3', })}>RESET</button>
                </div>
            </div>
        </div>
      );
    }

export default App;
