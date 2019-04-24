import React, { Component } from 'react';

class Reel extends Component {
  constructor(props){
    super(props)

    const symbols = this.props.symbols || ["3xBAR", "BAR", "2xBAR", "7", "CHERRY"];
    const currentSymbols = this.generateRandomStart(symbols);

    this.state = {
      isSpinning: false,
      symbols: symbols,
      spinningTime: this.props.spinningTime || 2000,
      topSlot: currentSymbols.top,
      centerSlot: currentSymbols.center,
      bottomSlot: currentSymbols.bottom,
      // lines: this.props.lines || 5,
      // image: this.props.image || null,
      // spinDelay: 0
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("Props", props);
    console.log("State", state);
    // if(props.shouldSpin){
    //   this.startSpinning();
    // }
    return null
  }

  componentDidUpdate(prevProps){
    if(prevProps.shouldSpin === false && this.props.shouldSpin){
      this.startSpinning();
    }
  }

  getCenterSlot(){}
  getTopSlot(){}
  getBottomSlot(){}

  startSpinning(){
    const { spinningTime, symbols } = this.state;
    const { spinDelay } = this.props;
    this.setState({
      isSpinning: true
    });

    let spin = setInterval(()=> {
      let currentSymbols = this.goToNextSymbol()
      this.setState({
        topSlot: currentSymbols.top,
        centerSlot: currentSymbols.center,
        bottomSlot: currentSymbols.bottom,
      })
    }, 250);

    setTimeout(() => {
      clearInterval(spin);
      this.finishSpinning()
    }, spinningTime + spinDelay);
  }

  finishSpinning() {
    this.props.finishRunning("DONE")
    this.setState({
      isSpinning: false
    });
  }

  setSymbolToPosition() {}

  goToNextSymbol(){
    const { symbols, topSlot, centerSlot, bottomSlot } = this.state;
    const last = symbols.length - 1

    return {
      top: topSlot === last ? 0 : topSlot + 1, 
      center: centerSlot === last ? 0 : centerSlot + 1, 
      bottom: bottomSlot === last ? 0 : bottomSlot + 1,
    }
  }

  generateRandomStart(symbols = this.state.symbols) {
    const top = Math.floor(Math.random() * (symbols.length)); //Max 4
    const center = top === (symbols.length - 1) ? 0 : top + 1
    let bottomSlot;
    if(top === symbols.length - 1){
      bottomSlot = 1
    } else if(top === symbols.length - 2){
      bottomSlot = 0
    } else {
      bottomSlot = top + 2
    }
    return {top: top, center: center, bottom: bottomSlot}
  }

  isSpinning(){
    return this.state.isSpinning
  }

  render() {
    const { state: { symbols } } = this;
    return (
      <div className="Reel">
      <p>{symbols[this.state.topSlot]} </p>
      <p>{symbols[this.state.centerSlot]} </p>
      <p>{symbols[this.state.bottomSlot]} </p>
      </div>
    );
  }
}

export default Reel;
