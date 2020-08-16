const express = require('express');
const router = express.Router();
const apiAdapter = require('./apiAdapter');
const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api/starships/';
const api = apiAdapter(BASE_URL);


router.get('/api/starships/:nbr', (req, res) => { 
  api.get(+ req.params.nbr + '/')
    .then(resp => res.send(resp.data))
    .catch(err => res.status(422).json(err));
})

module.exports = router