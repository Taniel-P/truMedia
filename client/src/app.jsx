import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Players from './components/Players.jsx';
import PlayerData from './components/PlayerData.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      playerData: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/players')
      .then((data) => {
        this.setState({
          players: data.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleClick(id) {
    axios.get(`/player`, {
      headers: {
        params: id
      }
    })
      .then((data) => {
        this.setState({
          playerData: data.data
        })
      })
  }

  render() {
    return (
      <div className="main">
        <div className="title">
          <h1>Performance Tracker</h1>
        </div>
        <Players players={this.state.players} onClick={this.handleClick} />
        <PlayerData data={this.state.playerData} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));