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
    const { winLines: {top, center, bottom} } = this.props;
    const anySeven = (top.name === "3x 7" || center.name === "3x 7" || bottom.name === "3x 7") ? "is-blinking" : "";
    const cherryOrSeven = (top.name === "CHERRY OR 7" || center.name === "CHERRY OR 7" || bottom.name === "CHERRY OR 7") ? "is-blinking" : "";
    const bar3x = (top.name === "3XBAR" || center.name === "3XBAR" || bottom.name === "3XBAR") ? "is-blinking" : ""
    const bar2x = (top.name === "2XBAR" || center.name === "2XBAR" || bottom.name === "2XBAR") ? "is-blinking" : "";
    const bar = (top.name === "BAR" || center.name === "BAR" || bottom.name === "BAR") ? "is-blinking" : "";
    const barCombination =  (top.name === "BAR COMBINATION" || center.name === "BAR COMBINATION" || bottom.name === "BAR COMBINATION") ? "is-blinking" : "";

    return(
      <aside className="Paytable">
        <table>
          <tbody>
            <tr>
              <th colSpan="2">Payoffs</th>
            </tr>
            <tr className={ top.name === "3x CHERRY" ? "is-blinking" : ""}>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
              </td>
              <td><p className="Paytable__text">On top line = $2000</p></td>
            </tr>
            <tr className={ center.name === "3x CHERRY" ? "is-blinking" : ""}>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
              </td>
              <td><p className="Paytable__text">On center line = $1000</p></td>
            </tr>
            <tr className={ bottom.name === "3x CHERRY" ? "is-blinking" : ""}>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
              </td>
              <td><p className="Paytable__text">On bottom line = $4000</p></td>
            </tr>
            <tr className={anySeven}>
              <td>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $150</p></td>
            </tr>
            <tr className={cherryOrSeven}>
              <td>
                <img className="Paytable__media" alt="Cherry Symbol" src={Cherry}/>
                <img className="Paytable__media" alt="Seven Symbol" src={Seven}/>
              </td>
              <td><p className="Paytable__text">On ANY combination of CHERRY<br/> and 7 on ANY line = $75</p></td>
            </tr>
            <tr className={bar3x}>
              <td>
                <img className="Paytable__media" alt="BARx3 Symbol" src={BARx3}/>
                <img className="Paytable__media" alt="BARx3 Symbol" src={BARx3}/>
                <img className="Paytable__media" alt="BARx3 Symbol" src={BARx3}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $50</p></td>
            </tr>
            <tr className={bar2x}>
              <td>
                <img className="Paytable__media" alt="BAR2x Symbol" src={BAR2x}/>
                <img className="Paytable__media" alt="BAR2x Symbol" src={BAR2x}/>
                <img className="Paytable__media" alt="BAR2x Symbol" src={BAR2x}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $20</p></td>
            </tr>
            <tr className={bar}>
              <td>
                <img className="Paytable__media" alt="BAR Symbol" src={BAR}/>
                <img className="Paytable__media" alt="BAR Symbol" src={BAR}/>
                <img className="Paytable__media" alt="BAR Symbol" src={BAR}/>
              </td>
              <td><p className="Paytable__text">On ANY line = $10</p></td>
            </tr>
            <tr className={barCombination}>
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
