import React, { Component } from 'react';

import BARx3 from '../../../images/3xBAR.png'
import BAR2x from '../../../images/2xBAR.png'
import BAR from '../../../images/BAR.png'
import Seven from '../../../images/7.png'
import Cherry from '../../../images/Cherry.png'

// Pay-table must indicate winning combinations and payouts as:
// 3 CHERRY symbols on top line 2000
// 3 CHERRY symbols on center line 1000
// 3 CHERRY symbols on bottom line 4000
// 3 7 symbols on any line 150
// Any combination of CHERRY and 7 on any line 75
// 3 3xBAR symbols on any line 50
// 3 2xBAR symbols on any line 20
// 3 BAR symbols on any line 10
// Combination of any BAR symbols on any line 5

class Paytable extends Component {
  render() {
    return(
      <aside className="Paytable">
        <table>
          <tbody>
            <tr>
              <th colSpan="2">Payoffs</th>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
              </td>
              <td><p className="Paytable__text">On top line = $2000</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
              </td>
              <td><p className="Paytable__text">On center line = $1000</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
              </td>
              <td><p className="Paytable__text">On bottom line = $4000</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $150</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
              </td>
              <td><p className="Paytable__text">On ANY combination of CHERRY<br/> and 7 on ANY line = $150</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="BARx3 Symbol" src={BARx3}/>
                <img className="Paytable__media" alt="BARx3 Symbol" src={BARx3}/>
                <img className="Paytable__media" alt="BARx3 Symbol" src={BARx3}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $50</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="BAR2x Symbol" src={BAR2x}/>
                <img className="Paytable__media" alt="BAR2x Symbol" src={BAR2x}/>
                <img className="Paytable__media" alt="BAR2x Symbol" src={BAR2x}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $20</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="BAR Symbol" src={BAR}/>
                <img className="Paytable__media" alt="BAR Symbol" src={BAR}/>
                <img className="Paytable__media" alt="BAR Symbol" src={BAR}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $10</p></td>
            </tr>
            <tr>
              <td>
                <img className="Paytable__media" alt="BAR2x Symbol" src={BAR2x}/>
                <img className="Paytable__media" alt="BAR Symbol" src={BAR}/>
                <img className="Paytable__media" alt="BARx3 Symbol" src={BARx3}/>
              </td>
              <td><p className="Paytable__text">Combination of any BAR<br/> symbols on any line = $5</p></td>
            </tr>
          </tbody>
        </table>
      </aside>
    );
  }
 }

 export default Paytable;

