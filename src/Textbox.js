import React, { useState } from 'react';
function TextBox() {
    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState('');
  
    const handleButtonClick = () => {
      setMessage(`Hi ${inputText}`);
    };
    return (
        <div>
          <label>Enter text: </label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleButtonClick}>Print</button>
          <p>{message}</p>
        </div>
      );
    }
    
    export default TextBox;