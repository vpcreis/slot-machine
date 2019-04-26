import React, { Component } from 'react';

class Reel extends Component {
  constructor(props){
    super(props)
    console.log(props)
    const symbols = this.props.symbols || ["3xBAR", "BAR", "2xBAR", "7", "CHERRY"];
    const currentSymbols = this.generateRandomStart(symbols);

    this.state = {
      isSpinning: false,
      symbols: symbols,
      spinningTime: this.props.spinningTime || 2000,
      topSlot: currentSymbols.top,
      centerSlot: currentSymbols.center,
      bottomSlot: currentSymbols.bottom,
      position: currentSymbols.position
      // lines: this.props.lines || 5,
      // image: this.props.image || null,
      // spinDelay: 0
    }
  }


  componentDidUpdate(prevProps){
    if(prevProps.shouldSpin === false && this.props.shouldSpin){
      this.startSpinning();
    }
  }

  // getTopSlot(){}
  // getCenterSlot(){}
  // getBottomSlot(){}


  startSpinning(){
    const { spinningTime, position } = this.state;
    const { spinDelay } = this.props;
    this.setState({
      isSpinning: true
    });

    let spin,
        currentPos = position,
        interval = Math.floor(Math.random() * 75 + 50);

    //Set a delay startup @spinDelay
    //Set random interval
    setTimeout(() => {
      spin = setInterval(()=> {
        let currentSymbols = this.goToNextSymbol()
        currentPos = currentPos + 121;

        this.setState({
          topSlot: currentSymbols.top,
          centerSlot: currentSymbols.center,
          bottomSlot: currentSymbols.bottom,
          position: currentPos
        })
      }, interval);

    }, spinDelay);

    setTimeout(() => {
      clearInterval(spin);
      this.finishSpinning()
    }, spinningTime + spinDelay);
  }

  finishSpinning() {
    const {symbols, topSlot, centerSlot, bottomSlot } = this.state;
    const {id} = this.props

    this.setState({
      isSpinning: false
    });

    this.props.finishRunning({
      id,
      top: symbols[topSlot],
      center: symbols[centerSlot],
      bottom: symbols[bottomSlot],
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
    return {top: top, center: center, bottom: bottomSlot, position: top * 121 }
  }

  isSpinning(){
    return this.state.isSpinning
  }

  render() {
    const { position = 0 } = this.state;
    const { image } = this.props;
    let reelStyle = { background: 'url(' + image + ') 0px ' +  position + 'px' };

    return (
      <div className="Reel" style={reelStyle}>
      </div>
    );
  }
}

export default Reel;
