import React, { Component } from 'react';
import Reel from './Reel';
import Paytable from './Paytable';
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
      reels: this.createReel(),
    }

    this.startRunning = this.startRunning.bind(this);
    this.addBalance = this.addBalance.bind(this);
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log(props, state)
  //   // return null
  // }

  // shouldComponentUpdate(nextProps, nextState){
    // console.log("nextProps", nextProps);
    // console.log("nextState", nextState);
  // }

  startRunning() {
    this.setState((state, props)=> ({
      playerBalance: state.playerBalance - 1,
      isRunning: true,
      reels: state.reels.map(r => {
        r.shouldSpin = true
        return r
      }),
    }));
  }

  addBalance(value){
    console.log("Balance should increase by:", value);
    this.setState((state, props)=> ({
      playerBalance: state.playerBalance + value
    }));
  }

  finishRunning(reel) {
    // Need condition to get all Reels and calculate prizes
    console.log(this.state)
    let index = Number(reel.id.split("_")[1]);

    this.setState({
      isRunning: false,
    });


  }

  hasBalance() {
    return this.state.playerBalance >= 1;
  }

  showEarnings() {}

  setReelValues() {}

  createReel() {
    const { size } = this.props;
    let reels = [], delay = 0;

    for(let s = 0; s < size; s++) {
      reels.push({
        id:"reel_" + s,
        lines: 5,
        spinDelay: delay,
        finishRunning: this.finishRunning.bind(this),
        image: ReelImage,
        shouldSpin: false,
      });

      delay = delay + 500;
    }
    return reels
  }

  render() {
    const { playerBalance, reels, isRunning } = this.state
    return (
      <React.Fragment>
        <Balance playerBalance={playerBalance} hasBalance={this.hasBalance()} addBalance={this.addBalance}/>
        <main>
          <section id="slot-machine-game">
            <div className="SlotMachine">
              {reels.map(reel => <Reel key={reel.id} {...reel} /> )}
            </div>
            <Button startSpin={this.startRunning} hasBalance={this.hasBalance()} {...this.state} />
          </section>
          <Paytable />
        </main>
        {/*<Debugger />*/}
      </React.Fragment>
    );
  }
}

export default SlotMachine;
