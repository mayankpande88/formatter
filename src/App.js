import React, { Component } from 'react';
import './App.css';
import InputCard from './component/input-box/InputCard'

import OutputCard from './component/output-box/OutputCard'

import CardButtons from './component/card-buttons/CardButtons'
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      outputText:''
    }
  }


  onInputChange = (event) => {
    this.setState({ inputText: event.target.value })
    console.log(event.target);
    console.log(this.state);
  }

  render() {
  return (   
      <div className="flex flex-column">

        <h1 className="center grow">Formatter</h1>
        <div className="flex center">
          <div>
            <InputCard inputChange={this.onInputChange}/>
          </div>
          <div>
            <CardButtons/>
          </div>
          <div>
            <OutputCard/>
          </div>
        </div>
    </div>
  );  }
}

export default App;
