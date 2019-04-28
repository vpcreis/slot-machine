import React, { Component } from 'react';
import Select from '../../shared/userInterface/Select';

// Component to test Outcomes from slot machine based on User data
class Debugger extends Component {
  constructor(props){
    super(props)
    console.log("Debugger Props", props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      firstReelSymbol: "3xBAR",
      firstReelPosition: "TOP",
      secondReelSymbol: "3xBAR",
      secondReelPosition: "TOP",
      thirdReelSymbol: "3xBAR",
      thirdReelPosition: "TOP",
    }
  }

  handleSelectChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value.toUpperCase()
    });
  }

  handleSubmit(event) {
    event.preventDefault();  
    this.props.reelValues(this.state);
  }

  // isValid(string) {
  //   console.log(string)
  //   if (string === "BAR"
  //     || string === "CHERRY"
  //     || string === "SEVEN" || string === "7"
  //     || string === "3XBAR"
  //     || string === "2XBAR"
  //     || string === "BAR"
  //   ){
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  render() {
    const symbols = ["3xBAR", "BAR", "2xBAR", "7", "CHERRY"];
    const positions = ["TOP", "CENTER", "BOTTOM"]
    return(
      <footer>
        <form onSubmit={this.handleSubmit} >
          <div className="Debugger">
            <div className="Debugger__wrapper">
              <h3 className="Debugger__title">Set First Reel</h3>
              <Select name="firstReelSymbol" labelName="Choose a Symbol" options={symbols} handleSelectChange={this.handleSelectChange}/>
              <Select name="firstReelPosition" labelName="Choose a Position" options={positions} handleSelectChange={this.handleSelectChange}/>
            </div>
            <div className="Debugger__wrapper">
              <h3 className="Debugger__title">Set Second Reel</h3>
              <Select name="secondReelSymbol" labelName="Choose a Symbol" options={symbols} handleSelectChange={this.handleSelectChange}/>
              <Select name="secondReelPosition" labelName="Choose a Position" options={positions} handleSelectChange={this.handleSelectChange}/>
            </div>
            <div className="Debugger__wrapper">
              <h3 className="Debugger__title">Set third Reel</h3>
              <Select name="thirdReelSymbol" labelName="Choose a Symbol" options={symbols} handleSelectChange={this.handleSelectChange}/>
              <Select name="thirdReelPosition" labelName="Choose a Position" options={positions} handleSelectChange={this.handleSelectChange}/>
            </div>
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
