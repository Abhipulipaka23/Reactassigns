import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Button() {
    const [message,setMessage]= useState('')
    function handleClick() {
    setMessage('Hello World');
    };
  return (

    <div className="App">
    
    <button onClick={handleClick}>Click here</button>
     <p>{message}</p>       
    </div>
  );
}

export default Button;
