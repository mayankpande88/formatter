import React from 'react';
import './OutputCard.css';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/fold/foldgutter.js';

const OutputCard=(props) =>{

  return (
  	 
    <div className=' center h-auto  w-40'>
   			 {console.log("outputBox",props)}
    		<CodeMirror 
            value={props.outputText}
            options={{
                      mode: props.state,
                      theme: 'material',
                      lineNumbers: true, 
                      foldGutter: true,
                      lineWrapping: true,
                      extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
                      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                    }} 
         />
    </div>
  );
}

export default OutputCard;
  