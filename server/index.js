const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const path = require('path');
const bodyParser = require('body-parser')
const axios = require('axios');
const { players } = require('./serverRoutes/players');
const { player } = require('./serverRoutes/player');

app.use(express.static('client/dist'));

app.get('/players', players)
app.get('/player', player)

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
})