const axios = require('axios');

module.exports = {
  getToken: (key) => {
    return axios.get('https://project.trumedianetworks.com/api/token', {
      headers: {
        apiKey: key
      }
    })
    .then((data) => {
      return data.data.token;
    })
    .catch((err) => {
      console.log('getToken ERR', err);
    })
  }
}