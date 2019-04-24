import React, { Component } from 'react';
import Reel from './Reel';
// import Paytable from './Paytable';
// import Debugger from './Debugger';
import Balance from './Balance';
import Button from '../../shared/userInterface/Button';

class SlotMachine extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRunning: false,
      playerBalance: 1,
    }

    this.startRunning = this.startRunning.bind(this);
  }

  startRunning() {
    const { playerBalance } = this.state;

    console.log("CallBack Called, START SPINNING!! :D");
    if(playerBalance >= 1){
      this.setState({
        playerBalance: (playerBalance - 1),
        isRunning: true,
      });
    } else {
      console.log("Current Balance is:", "%c", "background-color: orange; color: white;")
    }
  }

  finishRunning() {

  }

  hasBalance() {
    return this.state.playerBalance >= 1
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
      reels.push(<Reel key={s} lines= {5} spinDelay={delay}/>);
      delay = delay + 0.5;
    }
    return reels
  }


  render() {
    const { playerBalance } = this.state
    console.log(this.hasBalance())

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
