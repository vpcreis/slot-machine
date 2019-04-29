import React, { Component } from 'react';

class Reel extends Component {
  constructor(props){
    super(props)
    // console.log(props)
    const symbols = this.props.symbols || ["3XBAR", "BAR", "2XBAR", "7", "CHERRY"];
    

    this.state = {
      isSpinning: false,
      symbols: symbols,
      spinningTime: this.props.spinningTime || 2000,
      topSlot: 0,
      centerSlot: 1,
      bottomSlot: 2,
      position: 0
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.shouldSpin === false && this.props.shouldSpin){
      this.startSpinning();
    }
  }

  componentDidMount() {
    const currentSymbols = this.generateRandomStart(this.state.symbols);

    this.setState((state, props)=> ({
      topSlot: currentSymbols.top,
      centerSlot: currentSymbols.center,
      bottomSlot: currentSymbols.bottom,
      position: currentSymbols.position
    }))

    console.log(this.state)
  }

  startSpinning() {
    const { spinningTime, position, symbols, topSlot } = this.state;
    const { spinDelay, shouldLandOn } = this.props;
    // console.log("shouldLandOn", shouldLandOn)
    this.setState({
      isSpinning: true
    });

    let spin,
        currentPos = position,
        interval = Math.floor(Math.random() * 75 + 50);

    if (shouldLandOn){
      // console.log("DEBUGGER MODE ON")
      let landPostition = symbols.indexOf(shouldLandOn.symbol);
      let frames = 20
      interval = (spinningTime + spinDelay) / (frames - topSlot + landPostition - this.setSymbolToPosition(shouldLandOn.at))
      // console.log("TOPSLOT", topSlot)
    }

    //Set random interval

    spin = setInterval(()=> {
      let currentSymbols = this.goToNextSymbol()
      currentPos = currentPos + this.getSymbolSize();

      this.setState({
        topSlot: currentSymbols.top,
        centerSlot: currentSymbols.center,
        bottomSlot: currentSymbols.bottom,
        position: currentPos
      })
    }, interval); // Random number

    setTimeout(() => {
      clearInterval(spin);
      this.finishSpinning()
    }, spinningTime + spinDelay); // Defaults to 2000 + 0.5 delay for each next Reel
  }

  finishSpinning() {
    const { symbols, topSlot, centerSlot, bottomSlot } = this.state;
    const { id } = this.props

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

  getSymbolSize(){
    return document.querySelector(".Reel").offsetHeight / 3
  }

  setSymbolToPosition(string) {
    if (string === "CENTER"){
      return 1
    } else if(string === "BOTTOM"){
      return 2
    } else {
      return 0
    }
  }

  goToNextSymbol() {
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
    console.log(this.getSymbolSize())
    return {top: top, center: center, bottom: bottomSlot, position: top * this.getSymbolSize()}
  }

  isSpinning(){
    return this.state.isSpinning
  }

  render() {
    console.log("Renders", this.state)
    const { position = 0 } = this.state;
    const { id, image } = this.props;
    let reelStyle = {
      backgroundImage: 'url(' + image + ')',
      backgroundPosition: '0px -' +  position + 'px',
    };

    return (
      <div id={id} className="Reel" style={reelStyle}>
      </div>
    );
  }
}

export default Reel;
