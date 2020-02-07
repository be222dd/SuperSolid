const express = require('express')
const gameController = require('../controllers/gameController')

const router = express.Router()

router.get('/getscores', gameController.getHighScoresController)

router.post('/submitEntry', gameController.submitEntryController)

module.exports = router
