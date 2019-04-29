import React, { Component, Fragment } from 'react';

class Select extends Component {
  generateOptions() {
    const { options = [] } = this.props;
    return options.map(opt => <option key={opt} value={opt}>{opt}</option> );
  }

  render() {
    const { name, labelName } = this.props
    return (
      <Fragment>
        <div className="Debugger__list">
          { labelName &&
            <label htmlFor={name} className="Debugger__label">{labelName}</label>
          }
          <select id={name} name={name} className="Debugger__select" onChange={this.props.handleSelectChange}>
           {this.generateOptions()}
          </select>
        </div>
      </Fragment>
    )
  }
}

export default Select;
