import './App.css';
import {Cars, Form} from "./components";
import {useState} from "react";



function App() {
    const [cars, setCars] = useState( []);
  return (
    <div>
      <Form/>
      <Cars/>


    </div>
  );
}

export default App;
