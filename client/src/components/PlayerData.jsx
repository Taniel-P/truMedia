import React from 'react';
import axios from 'axios';

class PlayerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
  }

  render() {
    return (
      <div className="mainEachPlayer">
        <h1>Player Data</h1>
        {console.log('PLAYERDATA', this.props.data)}
      </div>
    )
  }
}

export default PlayerData;