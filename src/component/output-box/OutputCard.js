import React from 'react';
import './OutputCard.css';
const OutputCard=(props) =>{
  return (
    <div >
    		<textarea rows="30" cols="60" className="fl black bg-near-white near-black  ma5 textarea pa4" value={props.outputText} readOnly>
			</textarea>
    </div>
  );
}

export default OutputCard;
