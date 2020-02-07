
const cleanString = (str) => {
  // make it lowercase and remove all non alphanumeric chars
  return str.toLowerCase().replace(/[\W_]/g, '')
}

const isPalindrome = (str) => {
  //check for empty arrays
  if (str === '') return false
  //Palindrome Logic happens here
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) { return false }
  }
  return true
}

const calculateScore = (str) => {
  //gets the string cleaned
  const word = cleanString(str)
  //checks if palindrome and sends the scored point back 
  if (isPalindrome(word)) { return word.length }

  //if not palindrome sends 0 points
  return 0
}

const manageHighScoresArray = (highScoresArray) => {
  // sort the high score array
  highScoresArray.sort((first, second) => { return second.points - first.points })
  // remove all other indexes other than 5 high scores
  if (highScoresArray.length > 5) { highScoresArray.length = 5 }
  return highScoresArray
}

module.exports = { manageHighScoresArray, calculateScore }
