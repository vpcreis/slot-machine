import React, { Component } from 'react';

class Reel extends Component {
  constructor(props){
    super(props)

    this.state = {
      isSpinning: false,
      symbols: this.props.symbols || ["3xBAR", "BAR", "2xBAR", "7", "CHERRY"],
      lines: this.props.lines || 5,
      image: this.props.image || null,
      spinningTime: this.props.spinningTime || 2000,
    }
  }

  getCenterSlot(){}
  getTopSlot(){}
  getBottomSlot(){}

  startSpinning(){
    setTimeout(function(){
      console.log("Hello");
    }, this.state.spinningTime);
  }

  finishSpinning(){}
  setSymbolToPosition(){}

  isSpinning(){
    return this.state.isSpinning
  }

  setRandomStartUp(){
    return Math.floor(Math.random() * (this.state.symbols.length))
  }

  render() {
    return (
      <div className="Reel">
      <h2>{this.state.symbols[this.setRandomStartUp()]} </h2>
      </div>
    );
  }
}

export default Reel;
