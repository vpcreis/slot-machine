import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props)   
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.startSpin("Button Clicked!")
  }

  render() {
    const { hasBalance, isRunning } = this.props
    return (
      <button 
        className={(hasBalance && !isRunning)? "button button--green" : "button"}
        onClick={this.handleClick}
        disabled={!hasBalance || isRunning}>
        Spin!
      </button>
    )
  }
}

export default Button; 