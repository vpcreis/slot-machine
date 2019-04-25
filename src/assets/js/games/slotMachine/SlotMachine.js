import React, { Component } from 'react';
import Reel from './Reel';
// import Paytable from './Paytable';
// import Debugger from './Debugger';
import Balance from './Balance';
import Button from '../../shared/userInterface/Button';

import ReelImage from '../../../images/Reel_142_605.png'

class SlotMachine extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRunning: false,
      playerBalance: 5,
    }

    this.startRunning = this.startRunning.bind(this);
    this.finishRunning = this.finishRunning.bind(this);
  }

  startRunning() {
    const { playerBalance } = this.state;
    this.setState({
      playerBalance: (playerBalance - 1),
      isRunning: true,
    });
  }

  finishRunning(reel) {
    console.log(reel)
    // Need condition to get all Reels and calculate prizes 
     this.setState({
       shouldSpin: false,
       isRunning: false,
     })
  }

  hasBalance() {
    return this.state.playerBalance >= 1;
  }

  isRunning() {
    return this.state.isRunning
  }

  showEarnings() {}

  setReelValues() {}

  createReel() {
    const { size } = this.props;

    let reels = [];
    let delay = 0;
    for(let s = 0; s < size; s++) {
      reels.push(<Reel 
        key={s} 
        lines={5} 
        spinDelay={delay} 
        shouldSpin={this.isRunning()} 
        finishRunning={this.finishRunning}
        image={ReelImage}
        />);
      delay = delay + 500;
    }
    return reels
  }


  render() {
    const { playerBalance } = this.state

    return (
      <React.Fragment>
        <Balance playerBalance={playerBalance} hasBalance={this.hasBalance()}/>
        <main>
          <section id="slot-machine-game">
            <div className="SlotMachine">
              {this.createReel()}
            </div>
            <Button startSpin={this.startRunning} hasBalance={this.hasBalance()} />
          </section>
          {/*<Paytable />*/}
        </main>
        {/*<Debugger />*/}
      </React.Fragment>
    );
  }
}

export default SlotMachine;
