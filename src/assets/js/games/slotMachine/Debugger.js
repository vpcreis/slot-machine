import React, { Component } from 'react';
import Select from '../../shared/userInterface/Select';

// Component to test Outcomes from slot machine based on User data
class Debugger extends Component {
  constructor(props){
    super(props)
    let select = {}
    this.props.reels.map(reel => {
      select[reel + "_symbol"] = "3XBAR"
      select[reel + "_position"] = "TOP"
      return null
    });

    this.state = {
      select
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    const { name, value } = event.target;

    this.setState((state, props)=> ({
      select: {
        ...state.select,
        [name]: value,
      }
    }));

    console.log("After handler", this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.reelValues(this.state);
  }

  render() {
    const symbols = ["3xBAR", "BAR", "2xBAR", "7", "CHERRY"];
    const positions = ["TOP", "CENTER", "BOTTOM"];
    const { reels } = this.props;
    console.log(this.state)
    return(
      <footer>
        <form onSubmit={this.handleSubmit} >
          <div className="Debugger">
          { reels.map((reelId, index) => {
            return (
              <div key={index+1} className="Debugger__wrapper">
                <h3 className="Debugger__title">{"Set " + (index + 1) + "th Reel"}</h3>
                <Select name={reelId + "_symbol"} labelName="Choose a Symbol" options={symbols} handleSelectChange={this.handleSelectChange}/>
                <Select name={reelId + "_position"} labelName="Choose a Position" options={positions} handleSelectChange={this.handleSelectChange}/>
              </div>
            )
          })}
          </div>
          <div className="Debugger__wrapper">
            <button className="button button--green">Set Combination</button>
          </div>
        </form>
      </footer>
    );
  }
}

export default Debugger;
