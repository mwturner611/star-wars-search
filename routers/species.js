const express = require('express');
const router = express.Router();
const apiAdapter = require('./apiAdapter');

// create base URL and new axios instance from apiAdapter
const BASE_URL = 'https://swapi.dev/api/species/';
const api = apiAdapter(BASE_URL);

// call to Swapi API for species info
router.get('/api/species/:nbr', (req, res) => { 
  api.get(+ req.params.nbr + '/')
    .then(resp => res.send(resp.data))
    .catch(err => res.status(422).json(err));
})

module.exports = router