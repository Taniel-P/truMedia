import React, { useState, useEffect } from 'react';

class EachGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placehoder: null
    }
  }

  render() {
    return (
      <tr data-index={this.props.index}>
        {console.log('PROPS', this.props.stats)}
        <td className={`col-0 row-${this.props.index}`} data-col="0" data-row={this.props.index}>
          <span>{this.props.stats.gameDate}</span>
        </td>
        <td className={`col-1 row-${this.props.index}`} data-col="1" data-row={this.props.index}>
          <span>{this.props.stats.team}</span>
        </td>
        <td className={`col-2 row-${this.props.index}`} data-col="2" data-row={this.props.index}>
          <span>{this.props.stats.opponent}</span>
        </td>
        <td className={`col-3 row-${this.props.index}`} data-col="3" data-row={this.props.index}>
          <span>{this.props.stats.AB}</span>
        </td>
        <td className={`col-4 row-${this.props.index}`} data-col="4" data-row={this.props.index}>
          <span>{this.props.stats.AVG}</span>
        </td>
        <td className={`col-5 row-${this.props.index}`} data-col="5" data-row={this.props.index}>
          <span>{this.props.stats.BB}</span>
        </td>
        <td className={`col-6 row-${this.props.index}`} data-col="6" data-row={this.props.index}>
          <span>{this.props.stats.H}</span>
        </td>
        <td className={`col-7 row-${this.props.index}`} data-col="7" data-row={this.props.index}>
          <span>{this.props.stats.HBP}</span>
        </td>
        <td className={`col-8 row-${this.props.index}`} data-col="8" data-row={this.props.index}>
          <span>{this.props.stats.HR}</span>
        </td>
        <td className={`col-9 row-${this.props.index}`} data-col="9" data-row={this.props.index}>
          <span>{this.props.stats.K}</span>
        </td>
        <td className={`col-10 row-${this.props.index}`} data-col="10" data-row={this.props.index}>
          <span>{this.props.stats.OPS}</span>
        </td>
        <td className={`col-11 row-${this.props.index}`} data-col="11" data-row={this.props.index}>
          <span>{this.props.stats.PA}</span>
        </td>
        <td className={`col-12 row-${this.props.index}`} data-col="12" data-row={this.props.index}>
          <span>{this.props.stats.RBI}</span>
        </td>
        <td className={`col-13 row-${this.props.index}`} data-col="13" data-row={this.props.index}>
          <span>{this.props.stats.SF}</span>
        </td>
        <td className={`col-14 row-${this.props.index}`} data-col="14" data-row={this.props.index}>
          <span>{this.props.stats.TB}</span>
        </td>
      </tr>
    )
  }
}

export default EachGame;