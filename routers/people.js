const express = require('express');
const router = express.Router();
const apiAdapter = require('./apiAdapter');

// create base URL and new axios instance from apiAdapter
const BASE_URL = 'https://swapi.dev/api/people/';
const api = apiAdapter(BASE_URL);

// call to Swapi API for character info
router.get('/api/people/:name', (req, res) => {
  api.get('?search=' + req.params.name)
    .then(resp => res.send(resp.data))
    .catch(err => res.status(422).json(err));
})

module.exports = router