const axios = require('axios');
const key = require('../../config.js').USER_ADDRESS;
const { getToken } = require('../helpers/getToken');


module.exports = {
  player: (req, res) => {
    getToken(key)
    .then((token) => {
      axios.get(`https://project.trumedianetworks.com/api/mlb/player/${req.headers.params}`, {
        headers: {
          tempToken: token
        }
      })
      .then((playerData) => {
        // console.log('PLAYERDATA==', playerData.data)
        res.status(200).send(playerData.data);
      })
    })
    .catch((err) => {
      console.log('GET player data err', err);
    })
  }
}