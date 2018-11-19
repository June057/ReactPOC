import React, { Component } from 'react';
import CurrencyConverter from "./Components/CurrencyConverter"
import Counter from "./Components/CounterWithRedux"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>HELLO REACT </h2>
          <h3>Currency Converter Using React Components demonstrating composition and Top Down Data flow and state elevation </h3>
        <CurrencyConverter/>
          <div>
              <Counter/>
          </div>
      </div>
    );
  }
}

export default App;
