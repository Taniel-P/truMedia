const axios = require('axios');
// const key = require('../../config.js').USER_ADDRESS;
require('dotenv').config();
const { getToken } = require('../helpers/getToken');


module.exports = {
  players: (req, res) => {
    getToken(process.env.USER_ADDRESS)
    .then((token) => {
      axios.get('https://project.trumedianetworks.com/api/mlb/players', {
        headers: {
          tempToken: token
        }
      })
      .then((listOfPlayers) => {

        res.status(200).send(listOfPlayers.data);
      })
    })
    .catch((err) => {
      console.log('GET player data err', err);
    })
  }
}