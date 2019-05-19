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
        <div className="topnav header">
              <nav className="topnav-center">
                  <b className="f3 f1-l ml6 pl5">Formatter</b>
                  <div className="topnav-right">
                       <GitHubButton href="https://github.com/mayankpande88" data-size="large" aria-label="Follow @mayankpande88 on GitHub">Follow @mayankpande88</GitHubButton>
                  </div>
              </nav>
        </div>
        <div className="flex flex-column center pt4 h-100 ma0">
        <b className="pb3 center">Formats a XML/JSON/SQL string into redable format. The formatting rules are not configurable but it uses a per-element indentation pattern giving the best readability.</b>
                    
            <div className="flex center h-100 w-100">
                <InputCard inputChange={this.onInputChange } inputText={inputText} state={this.state.state}/>
                <CardButtons buttonClick={this.onButtonClick}/>
                <OutputCard outputText={outputText} state={this.state.state}/>
            </div>
        </div>
  </div>
  );  }
}

export default App;
