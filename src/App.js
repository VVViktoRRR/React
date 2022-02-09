import './App.css';
import {Cars, Form} from "./components";
import {useState} from "react";

function App() {
    const [trigger, setTrigger] = useState()
    const [cars, setCars] = useState( []);
    const update = data => {
        setTrigger(data)
    }
  return (
    <div>
      <Form update={update}/>
      <Cars trigger={trigger}/>
    </div>
  );
}

export default App;
