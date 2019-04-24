import React, { Component } from 'react';

// Pay-table must indicate winning combinations and payouts as:
// 3 CHERRY symbols on top line 2000
// 3 CHERRY symbols on center line 1000
// 3 CHERRY symbols on bottom line 40003 7 symbols on any line 150
// Any combination of CHERRY and 7 on any line 75
// 3 3xBAR symbols on any line 50
// 3 2xBAR symbols on any line 20
// 3 BAR symbols on any line 10
// Combination of any BAR symbols on any line 5

class Paytable extends Component {
  constructor(props){
    super(props)
   }

  render() {
    return(
      <aside class="Paytable">
        <table>
          <tr>
            <th>Payoffs</th>
          </tr>
          <tr>
            <td>top/Cherry</td>
            <td>top/Cherry</td>
            <td>top/Cherry</td>
            <td>2000</td>
          </tr>
        </table>
      </aside>
    );
  }
 }

 export default Paytable;