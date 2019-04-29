import React, { Component } from 'react';

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { target: { value } } = event;
    const re = /^[0-9\b]+$/;

    if ( (value === '' || re.test(value)) && value < 5001) {
      this.setState({value: Number(value)})
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addBalance(this.state.value);
    this.setState({value: ''});
  }

  render() {
    const { playerBalance, hasBalance } = this.props
    return(
      <header className="Balance">
        <p className="Balance__text">Your Balance <b className={hasBalance ? "Balance__has-balance" : "Balance__has-no-balance"}>${playerBalance}</b></p>
        <form onSubmit={this.handleSubmit}>
          <label className="Balance__label" htmlFor="addBalance">Add Balance: </label>
          <input className="Balance__input" id="addBalance" placeHolder="insert value" name="addBalance" value={this.state.value} onChange={this.handleChange}/>
          <button className="button button--yellow" disabled={this.state.value !== '' ? false : true}>Add</button>
        </form>
      </header>
    );
  }
}

 export default Balance;