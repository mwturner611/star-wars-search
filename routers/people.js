const express = require('express');
const router = express.Router();
const apiAdapter = require('./apiAdapter');
const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api/people/';
const api = apiAdapter(BASE_URL);

router.get('/api/people/:name', (req, res) => {
    console.log(req.params.name)
    console.log(api)
  api.get('?search=' + req.params.name)
    .then(resp => res.send(resp.data))
    .catch(err => res.status(422).json(err));
})

module.exports = router