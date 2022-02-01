import React, {useReducer} from 'react';

import {Cats, Dogs, Form} from "./components";
import {Animals} from "./reduser/Reduser";

const App = () => {
    const [{cats, dogs}, dispatch] = useReducer(Animals, {cats:[], dogs:[]})
    return (
        <div>
            <Form dispatch={dispatch}/>
            <div style={{display:'flex'}}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;