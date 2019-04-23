import React, { Component } from 'react';
import Reel from './Reel';

class SlotMachine extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRunning: false,
      playerBalance: 50,
    }
  }

  startRunning() {}
  finishRunning() {}
  isRunning() {}
  showEarnings(){}
  setReelValues(){}
  createReel() {
    const { size } = this.props
    let reels = []
    for(let s = 0; s < size; s++){
      reels.push(<Reel key={s} lines= {8} />)
    }
    return reels
  }

  render() {
    return (
      <div className="SlotMachine">
        {this.createReel()}
      </div>
    );
  }
}

export default SlotMachine;
