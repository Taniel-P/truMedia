const axios = require('axios');
require('dotenv').config();
const { getToken } = require('../helpers/getToken');


module.exports = {
  player: (req, res) => {
    getToken(process.env.USER_ADDRESS)
    .then((token) => {
      axios.get(`https://project.trumedianetworks.com/api/mlb/player/${req.headers.params}`, {
        headers: {
          tempToken: token
        }
      })
      .then((playerData) => {
        res.status(200).send(playerData.data);
      })
    })
    .catch((err) => {
      console.log('GET player data err', err);
    })
  }
}