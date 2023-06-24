import logo from './logo.svg';
import './App.css';
import SliderComp from "./components/SliderComp";
import {useState} from "react";
function App() {
    const [value, setValue]= useState('')
    const handleChange =(e)=>{
        setValue(e.target.value)
    }
    const probka ={
        type: 'text',
        value,
        onChange: handleChange
    }
  return (
    <div>
      <SliderComp probka={probka}/>
    </div>
  );
}

export default App;
