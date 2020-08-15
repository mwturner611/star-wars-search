const express = require('express');
const router = express.Router()
const people = require('./people');
const films = require('./films');
const starShips = require('./starShips');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(films)
router.use(people)
router.use(starShips)


module.exports = router