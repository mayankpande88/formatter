import React, { Component } from 'react';
import xmlChecker from 'xmlchecker';
import sqlFormatter from "sql-formatter";

import './App.css';
import InputCard from './component/input-box/InputCard'

import OutputCard from './component/output-box/OutputCard'

import CardButtons from './component/card-buttons/CardButtons'
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      outputText:'',
      state:''
    }
  }


  onInputChange = (event) => {
    this.setState({ inputText: event.target.value })
    this.setState({ state:'' })
  }
  onButtonClick = (event) => {
    if(event.target.innerHTML==="XML"){
      this.setState({ state:"XML"})
    }

    if(event.target.innerHTML==="JSON"){
      this.setState({ state:"JSON"})
    }

    if(event.target.innerHTML==="SQL"){
      this.setState({ state:"SQL"})
    }
     if(event.target.innerHTML==="RESET"){
      this.setState({ state:"RESET"})
    }
  }
  render() {
        var { inputText, outputText,state } = this.state;
        outputText='';
        if(state==='XML'){
            
            try{
                xmlChecker.check(inputText);
                outputText=xmlChecker.prettify(inputText);
            }
            catch (error){
                outputText = "XML Parser: " + error.name + " at " + error.line + "," + error.column + ": " + error.message;
            }
        }
        if(state==='JSON'){
            
            try{
                var jsObj=JSON.parse(inputText);
                outputText=JSON.stringify(jsObj, null, "\t");
                }
            catch (error){
                outputText = "JSON Parser: " + error.message;
            }
        }
        if(state==='SQL'){
            
            try{
                outputText=sqlFormatter.format(inputText);
            }
            catch (error){
                outputText = "XML Parser: " + error.name + " at " + error.line + "," + error.column + ": " + error.message;
            }
        }
        else if(state==='RESET'){
            outputText='';
            inputText='';
        }

  return (   
      <div className="flex flex-column">

        <h1 className="center grow">Formatter</h1>
        <div className="flex center">
          <div>
            <InputCard inputChange={this.onInputChange}/>
          </div>
          <div>
            <CardButtons buttonClick={this.onButtonClick}/>
          </div>
          <div>
            <OutputCard outputText={outputText}/>
          </div>
        </div>
    </div>
  );  }
}

export default App;
