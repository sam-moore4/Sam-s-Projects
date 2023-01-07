const express = require('express')
const teamsController = require('../controllers/teamsController.js')
const router = express.Router();

router.get('/', (req,res) => {
    teamsController.loadTeams(req,res);
})


module.exports = router