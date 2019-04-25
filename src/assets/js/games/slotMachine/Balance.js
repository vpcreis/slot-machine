import React, { Component } from 'react';

class Balance extends Component {
  render() {
    const { playerBalance, hasBalance } = this.props
    return(
      <header className="Balance">
        <p>Your Balance <b className={hasBalance ? "Balance__has-balance" : "Balance__has-no-balance"}>${playerBalance}</b></p>
      </header>
    );
  }
}

 export default Balance;