import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/sql/sql';
import './InputCard.css';
const InputCard=(props) =>{
	console.log('inputParams= ',props);
  return (
  	<div className='center h-80 w-40'>
    	<CodeMirror
     			value={props.inputText}
  				options={{
    				mode: props.state,
    				theme: 'xq-light',
    				lineNumbers: true
  					}}
  				onBeforeChange={props.inputChange}
				
		/>
	</div>
  );
}

export default InputCard;
