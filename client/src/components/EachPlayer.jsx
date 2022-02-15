import React, { useState, useEffect } from 'react';
import axios from 'axios';

class EachPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e.target.id)
  }

  render() {
    return (
      <div className="mainEachPlayer">
        <div className="eachplayer">
          <div>Name: {this.props.playerInfo.fullName}</div>
          <img id={this.props.playerInfo.playerId} src={this.props.playerInfo.playerImage} onClick={this.handleClick}></img>
        </div>
      </div>
    )
  }
}

export default EachPlayer;