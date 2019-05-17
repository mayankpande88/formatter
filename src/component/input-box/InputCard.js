import React from 'react';
import './InputCard.css';
const InputCard=({inputText, inputChange }) =>{
  return (
    <div>
    		<textarea  rows="30" cols="60" className="fl black bg-near-white near-black  ma5 textarea pa3" onChange={inputChange} value={inputText}>
			</textarea>
    </div>
  );
}

export default InputCard;
