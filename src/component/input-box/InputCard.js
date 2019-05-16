import React from 'react';
import './InputCard.css';
const InputCard=({ inputText, inputChange }) =>{
  return (
    <div>
    		<textarea  rows="30" cols="60" className="fl black bg-near-white near-black pa2 ma5 textarea" onChange={inputChange}>
			</textarea>
    </div>
  );
}

export default InputCard;
