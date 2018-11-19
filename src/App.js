import React, { Component } from 'react';
import CurrencyConverter from "./Components/CurrencyConverter"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>HELLO REACT </h2>
        <CurrencyConverter/>
      </div>
    );
  }
}

export default App;
