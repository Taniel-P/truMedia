import React, { useState, useEffect } from 'react';
import EachPlayer from './EachPlayer.jsx';

const Players = (props) => {
return (
  <div className="mainPlayers">
    {props.players.map((player, i) =>
    <EachPlayer key={i} playerInfo={player} onClick={props.onClick}/>
    )}
  </div>
)
}

export default Players;