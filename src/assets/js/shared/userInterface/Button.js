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
    const { hasBalance } = this.props
    return <button className={hasBalance ? "button button--green" : "button"} onClick={this.handleClick} disabled={!hasBalance} >Start Spin!</button>
  }
}

export default Button; 