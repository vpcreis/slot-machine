import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { startSpin } = this.props
    if(startSpin){
      this.props.startSpin("Button Clicked!")
    } else {
      console.log("No Callbacks")
    }
  }

  render() {
    const { hasBalance, isRunning, text } = this.props
    return (
      <button
        className={(hasBalance && !isRunning)? "button button--green" : "button"}
        onClick={this.handleClick}
        disabled={!hasBalance || isRunning}>
        {text}
      </button>
    )
  }
}

export default Button;
