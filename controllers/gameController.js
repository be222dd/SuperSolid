const gameLogic = require('../businessLogic/gameLogic')
// Array to keep high scores
let highScoresArray = []

exports.getHighScoresController = (req, res) => {
  res.status(200).json(highScoresArray)
}

exports.submitEntryController = (req, res) => {
  // Validate req.body. Return Bad request if not validated correctly
  if (!req.body.name || !req.body.word) {
    res.status(400).json(
      {
        status: 'Bad request!',
        message: 'Please provide name and word in the request body'
      }
    )
    return
  }

  // get scored points from game logic
  const points = gameLogic.calculateScore(req.body.word)

  // push scored point to the high scores array
  highScoresArray.push({ name: req.body.name, points: points })

  // get managed high scores array from game logic
  highScoresArray = gameLogic.manageHighScoresArray(highScoresArray)

  // send the  response back
  res.status(201).json({ points: points })
}
