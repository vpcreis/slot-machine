import React, { Component } from 'react';

// Component to test Outcomes from slot machine based on User inputs
class Debugger extends Component {
  constructor(props){
    super(props)
   }

  render() {
    return(
      <footer>
        <form>
          <div class="Debugger">
            <div class="Debugger__wrapper">
              <h3 class="Debugger__title">Set First Reel</h3>
              <ul class="Debugger__list">
                <li class="Debugger__list-item">
                  <label for="first_reel" class="Debugger__label">Choose a Symbol</label>
                  <input class="Debugger__input" type="input" name="first_reel" id="first_reel" placeholder="Ex: Cherry"/>
                </li>
                <li>
                  <label class="Debugger__label" for="first_reel">Choose a Position</label>
                  <input class="Debugger__input" type="input" name="first_reel" id="first_reel" placeholder="Ex: top/center/bottom"/>
                </li>
              </ul>
            </div>
            <div class="Debugger__wrapper">
              <h3 class="Debugger__title">Set Second Reel</h3>
              <ul class="Debugger__list">
                <li class="Debugger__list-item">
                  <label for="second_reel" class="Debugger__label">Choose a Symbol</label>
                  <input class="Debugger__input" type="input" name="second_reel" id="second_reel" placeholder="Ex: Cherry"/>
                </li>
                <li>
                  <label class="Debugger__label" for="second_reel">Choose a Position</label>
                  <input class="Debugger__input" type="input" name="second_reel" id="second_reel" placeholder="Ex: top/center/bottom"/>
                </li>
              </ul>
            </div>
            <div class="Debugger__wrapper">
              <h3 class="Debugger__title">Set Third Reel</h3>
              <ul class="Debugger__list">
                <li class="Debugger__list-item">
                  <label for="third_reel" class="Debugger__label">Choose a Symbol</label>
                  <input class="Debugger__input" type="input" name="third_reel" id="third_reel" placeholder="Ex: Cherry"/>
                </li>
                <li>
                  <label class="Debugger__label" for="third_reel">Choose a Position</label>
                  <input class="Debugger__input" type="input" name="third_reel" id="third_reel" placeholder="Ex: top/center/bottom"/>
                </li>
              </ul>
            </div>
          </div>
          <div class="Debugger__wrapper">
            <button>Set Combination</button>
          </div>
        </form>
      </footer>
    );
  }
}

 export default Debugger;