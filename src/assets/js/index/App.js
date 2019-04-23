import React, { Component } from 'react';
import SlotMachine from '../games/slotMachine/SlotMachine';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlotMachine size={3} />
      </div>
    );
  }
}

export default App;
