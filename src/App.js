import React, { Component } from 'react';
import xmlChecker from 'xmlchecker';
import sqlFormatter from "sql-formatter";
import './App.css';
import InputCard from './component/input-box/InputCard';
import OutputCard from './component/output-box/OutputCard';
import CardButtons from './component/card-buttons/CardButtons';
import GitHubButton from 'react-github-btn';
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      outputText:'',
      state:''
    }
  }


  onInputChange = (editor, data, value) => {
    this.setState({ inputText: value });
    this.setState({ state:'' });
  }
  onButtonClick = (event) => {
    if(this.state.inputText===''){
      alert("Please enter inputText");
      return;
    }
    if(event.target.innerHTML==="XML"){
      this.setState({ state:"xml"})
    }
    if(event.target.innerHTML==="JSON"){
      this.setState({ state:"json"})
    }
    if(event.target.innerHTML==="SQL"){
      this.setState({ state:"sql"})
    }
     if(event.target.innerHTML==="RESET"){
      this.setState({ state:"RESET"})
    }
  }
  render() {
        var { inputText, outputText,state } = this.state;

        outputText='';
        if(state==='xml'){
            
            try{
               // xmlChecker.check(inputText);
                outputText=xmlChecker.prettify(inputText);
            }
            catch (error){
                outputText = "XML Parser: " + error.name + " at " + error.line + "," + error.column + ": " + error.message;
            }
        }
        if(state==='json'){
            
            try{
                var jsObj=JSON.parse(inputText);
                outputText=JSON.stringify(jsObj, null, "\t");
                }
            catch (error){
                outputText = "JSON Parser: " + error.message;
            }
        }
        if(state==='sql'){
                outputText=sqlFormatter.format(inputText);
        }
        else if(state==='RESET'){
           this.setState({ inputText: '' });
           this.setState({ outputText: '' });
           this.setState({ state: '' });
           inputText='';
           outputText='';
           state=''
  
        }

  return (   
  <div className="h-100 w-100 ">
  <div class="topnav">
  <div class="topnav-right">
            <nav>
                  <GitHubButton href="https://github.com/mayankpande88" data-size="large" aria-label="Follow @mayankpande88 on GitHub">Follow @mayankpande88</GitHubButton>
                </nav>
      </div>
</div>
    <div className="flex flex-column pt4 h-100">
        <div className="flex h-100 w-100">
            <InputCard inputChange={this.onInputChange } inputText={inputText} state={this.state.state}/>
            <CardButtons buttonClick={this.onButtonClick}/>
            <OutputCard outputText={outputText} state={this.state.state}/>
        </div>
    </div>
 
  </div>
  );  }
}

export default App;
