import React, { Component } from 'react';

// Component to test Outcomes from slot machine based on User data
class Debugger extends Component {
  constructor(props){
    super(props)
    console.log("Debugger Props", props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      firstReelSymbol: "",
      firstReelPosition: "",
      secondReelSymbol: "",
      secondReelPosition: "",
      thirdReelSymbol: "",
      thirdReelPosition: "",
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target
    this.validate(value)

    this.setState({
      [name]: value.toUpperCase()
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.reelValues(this.state);
    this.setState({value: ''});
  }

  validate(string) {
    if (string != "BAR"
      || string != "CHERRY"
      || string != "SEVEN" || string != "7"
      || string != "3XBAR"
      || string != "2XBAR"
      || string != "BAR"
    ){
      return ""
    }
  }

  render() {
    return(
      <footer>
        <form onSubmit={this.handleSubmit}>
          <div className="Debugger">
            <div className="Debugger__wrapper">
              <h3 className="Debugger__title">Set First Reel</h3>
              <ul className="Debugger__list">
                <li className="Debugger__list-item">
                  <label htmlFor="firstReelSymbol" className="Debugger__label">Choose a Symbol</label>
                  <input className="Debugger__input" onChange={this.handleInputChange} type="input" name="firstReelSymbol" id="firstReelSymbol" placeholder="Ex: Cherry"/>
                </li>
                <li>
                  <label className="Debugger__label" htmlFor="firstReelPosition">Choose a Position</label>
                  <input className="Debugger__input" onChange={this.handleInputChange} type="input" name="firstReelPosition" id="firstReelPosition" placeholder="Ex: top/center/bottom"/>
                </li>
              </ul>
            </div>
            <div className="Debugger__wrapper">
              <h3 className="Debugger__title">Set Second Reel</h3>
              <ul className="Debugger__list">
                <li className="Debugger__list-item">
                  <label htmlFor="secondtReelSymbol" className="Debugger__label">Choose a Symbol</label>
                  <input className="Debugger__input" onChange={this.handleInputChange} type="input" name="secondtReelSymbol" id="secondtReelSymbol" placeholder="Ex: Cherry"/>
                </li>
                <li>
                  <label className="Debugger__label" htmlFor="secondtReelPosition">Choose a Position</label>
                  <input className="Debugger__input" onChange={this.handleInputChange} type="input" name="secondtReelPosition" id="secondtReelPosition" placeholder="Ex: top/center/bottom"/>
                </li>
              </ul>
            </div>
            <div className="Debugger__wrapper">
              <h3 className="Debugger__title">Set Third Reel</h3>
              <ul className="Debugger__list">
                <li className="Debugger__list-item">
                  <label htmlFor="thirdtReelSymbol" className="Debugger__label">Choose a Symbol</label>
                  <input className="Debugger__input" onChange={this.handleInputChange} type="input" name="thirdtReelSymbol" id="thirdtReelSymbol" placeholder="Ex: Cherry"/>
                </li>
                <li>
                  <label className="Debugger__label" htmlFor="thirdtReelPosition">Choose a Position</label>
                  <input className="Debugger__input" onChange={this.handleInputChange} type="input" name="thirdtReelPosition" id="thirdtReelPosition" placeholder="Ex: top/center/bottom"/>
                </li>
              </ul>
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
