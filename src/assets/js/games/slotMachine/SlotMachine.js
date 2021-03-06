import React, { Component, Fragment } from 'react';
import Reel from './Reel';
import Paytable from './Paytable';
import Debugger from './Debugger';
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
      winLines: {
        top: {
          name: "None",
        },
        center: {
          name: "None",
        },
        bottom: {
          name: "None",
        }
      }
    }

    this.startRunning = this.startRunning.bind(this);
    this.addBalance = this.addBalance.bind(this);
    this.setReelValues = this.setReelValues.bind(this);
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
      winLines: {
        top: {
          name: "None",
        },
        center: {
          name: "None",
        },
        bottom: {
          name: "None",
        }
      }
    }));
  }

  addBalance(value) {
    // console.log("Balance should increase by:", value);
    this.setState((state, props)=> ({
      playerBalance: state.playerBalance + value
    }));
  }

  finishRunning(reel) {
    // console.log(reel);
    // Need condition to get all Reels and calculate prizes
    this.setState((state, props)=> ({
      reels: state.reels.map(stateReel => {
        if(stateReel.id === reel.id) {
          stateReel.shouldSpin = false;
          stateReel["top"] = reel.top;
          stateReel["center"] = reel.center;
          stateReel["bottom"] = reel.bottom;
        }
        return stateReel;
      }),
    }));

    let shouldStop = this.state.reels.map(reel => reel.shouldSpin).every(el => el === false);
    if(shouldStop) {
      this.setState({
        isRunning: false
      });
      this.showEarnings();
      // console.log("SlotMachine is running? ", this.state.isRunning);
    }
  }

  hasBalance() {
    return this.state.playerBalance >= 1;
  }

  showEarnings() {
    const { reels } = this.state;
    const top = this.getPrize(reels.map(el => el.top), "top"),
          center = this.getPrize(reels.map(el => el.center), "center"),
          bottom = this.getPrize(reels.map(el => el.bottom), "bottom"),
          totalPrize = (top.prize + center.prize + bottom.prize)
    // console.log(totalPrize)
    this.setState((state, props)=> ({
      playerBalance: state.playerBalance + totalPrize,
      winLines: {
        top,
        center,
        bottom,
      },
    }));
}
  getPrize(symbolCombination = [], position){
    if( symbolCombination.every(el => el === "CHERRY") && position === "top" ){
      console.log("3x CHERRY! You Won $2000");
      return {name: "3x CHERRY", prize: 2000}
    } else if( symbolCombination.every(el => el === "CHERRY") && position === "center" ){
      console.log("3x CHERRY! You Won $1000");
      return {name: "3x CHERRY", prize: 1000}
    } else if( symbolCombination.every(el => el === "CHERRY") && position === "bottom" ){
      console.log("3x CHERRY! You Won $4000");
      return {name: "3x CHERRY", prize: 4000}
    } else if( symbolCombination.every(el => el === "7") ){
      console.log("3x 7s! You Won $150");
      return {name: "3x 7", prize: 150}
    } else if( symbolCombination.every(el => el === "7" || el === "CHERRY") ){
      console.log("Combo 7 and CHERRY! You Won $75");
      return {name: "CHERRY OR 7", prize: 75}
    } else if( symbolCombination.every(el => el === "3XBAR") ){
      console.log("3XBAR! You Won $50");
      return {name: "3XBAR", prize: 50}
    } else if( symbolCombination.every(el => el === "2XBAR") ){
      console.log("2XBAR! You Won $20");
      return {name: "2XBAR", prize: 20}
    } else if( symbolCombination.every(el => el === "BAR") ){
      console.log("BAR! You Won $10");
      return {name: "BAR", prize: 10}
    } else if( symbolCombination.every(el => el === "3XBAR" || el === "2XBAR" || el === "BAR") ){
      console.log("Combination of Bars!, You Won $5");
      return {name: "BAR COMBINATION", prize: 5}
    } else {
      console.log("Sorry, no prizes for you!");
      return {name: "None", prize: 0}
    }
  }

  setReelValues(reels) {
    const { select } = reels;
    this.setState((state, props)=> ({
      reels: state.reels.map(stateReel => {
        stateReel.shouldLandOn = {symbol: select[stateReel.id + "_symbol"], at: select[stateReel.id + "_position"]}
        return stateReel;
      })
    }));
    // console.log("SET VALUES REEL", this.state.reels)
    this.startRunning();
  }

  createReel() {
    const { size } = this.props;
    let reels = [], delay = 0;

    for(let s = 0; s < size; s++) {
      reels.push({
        id:"reel" + s,
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
    const { playerBalance, reels, winLines, isRunning } = this.state;
    const { top, center, bottom } = winLines;
    const reelsId = []
    const Reels = reels.map(reel => {
      reelsId.push(reel.id)
      return <Reel key={reel.id} {...reel} />
    });

    return (
      <Fragment>
        <Balance playerBalance={playerBalance} hasBalance={this.hasBalance()} addBalance={this.addBalance}/>
        <main>
          <section id="slot-machine-game">
            <div className="SlotMachine">
              {Reels}
              <span className={top.name === "None" ? "" : "SlotMachine__winMarks"}></span>
              <span className={center.name === "None" ? "" : "SlotMachine__winMarks--center"}></span>
              <span className={bottom.name === "None" ? "" : "SlotMachine__winMarks--bottom"}></span>
            </div>
            <Button text="Random Spin!" startSpin={this.startRunning} hasBalance={this.hasBalance()} {...this.state} />
          </section>
          <Paytable winLines={winLines}/>
        </main>
        <Debugger
          reelValues={this.setReelValues}
          reels={reelsId}
          startSpin={this.startRunning}
          hasBalance={this.hasBalance()}
          isRunning={isRunning}
        />
      </Fragment>
    );
  }
}

export default SlotMachine;
