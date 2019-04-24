import React, { Component } from 'react';

class Reel extends Component {
  constructor(props){
    super(props)

    this.state = {
      isSpinning: false,
      symbols: this.props.symbols || ["3xBAR", "BAR", "2xBAR", "7", "CHERRY"],
      spinningTime: this.props.spinningTime || 2000,
      // lines: this.props.lines || 5,
      // image: this.props.image || null,
      // spinDelay: 0
    }
  }

  getCenterSlot(){}
  getTopSlot(){}
  getBottomSlot(){}

  startSpinning(){
    const { state: { spinningTime } } = this;

    setTimeout(function(){
      console.log("Hello");
    }, spinningTime);
  }

  finishSpinning() {}
  setSymbolToPosition() {}

  isSpinning(){
    return this.state.isSpinning
  }

  setRandomStartUp(){
    return Math.floor(Math.random() * (this.state.symbols.length))
  }

  render() {
    const { state: { symbols } } = this;
    return (
      <div className="Reel">
      <p>{symbols[this.setRandomStartUp()]} </p>
      </div>
    );
  }
}

export default Reel;
