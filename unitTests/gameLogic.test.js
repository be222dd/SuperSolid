const rewire = require('rewire')
const expect = require('chai').expect

// Using rewire to be able to get non exported functions from the module
const gameLogic = rewire('../businessLogic/gameLogic')

// getting all the functions
const manageHighScoresArray = gameLogic.__get__('manageHighScoresArray')
const cleanString = gameLogic.__get__('cleanString')
const isPalindrome = gameLogic.__get__('isPalindrome')
const calculateScore = gameLogic.__get__('calculateScore')

describe('manageHighScoresArray Tests ', () => {
  it('Should return an empty array', () => {
    const highScoreArray = []
    expect(manageHighScoresArray(highScoreArray)).to.deep.equal([])
  })

  it('Should sort the array', () => {
    const highScoreArray = [{ name: 'John', points: 10 }, { name: 'Lebron', points: 23 }, { name: 'Kane', points: 213 }]
    const expectedHighScoreArray = [{ name: 'Kane', points: 213 }, { name: 'Lebron', points: 23 }, { name: 'John', points: 10 }]
    expect(manageHighScoresArray(highScoreArray)).to.deep.equal(expectedHighScoreArray)
  })

  it('Should sort the large array and keep the size at 5', () => {
    const highScoreArray = [{ name: 'John', points: 10 }, { name: 'Lebron', points: 23 }, { name: 'Kane', points: 300 }, { name: 'Boris', points: 214 }, { name: 'Jack', points: 215 }, { name: 'Ryan', points: 216 }]
    const expectedHighScoreArray = [{ name: 'Kane', points: 300 }, { name: 'Ryan', points: 216 }, { name: 'Jack', points: 215 }, { name: 'Boris', points: 214 }, { name: 'Lebron', points: 23 }]
    expect(manageHighScoresArray(highScoreArray)).to.deep.equal(expectedHighScoreArray)
  })
})

describe('cleanString Function Tests ', () => {
  it('Gets an empty String and Should return an empty string', () => {
    const givenString = ''
    const expectedString = ''
    expect(cleanString(givenString)).to.be.equal(expectedString)
  })

  it('Gets an only non AlphaNumeric String and Should return an empty string', () => {
    const givenString = ':/^+%&/()=?_!'
    const expectedString = ''
    expect(cleanString(givenString)).to.be.equal(expectedString)
  })

  it('Gets an a random String and Should return an only lowercase anphaNumeric string', () => {
    const givenString = ':/^+%&/()=?_!I am alpha numeric 123'
    const expectedString = 'iamalphanumeric123'
    expect(cleanString(givenString)).to.be.equal(expectedString)
  })
})

describe('isPalindrome Function Tests ', () => {
  it('Gets an empty String and Should return false', () => {
    const givenString = ''
    expect(isPalindrome(givenString)).to.be.false
  })

  it('Gets an  1 char string and Should return true', () => {
    const givenString = 'A'
    expect(isPalindrome(givenString)).to.be.true
  })

  it('Gets an  palindrome string and Should return true', () => {
    const givenString = 'ANNA'
    expect(isPalindrome(givenString)).to.be.true
  })

  it('Gets a non palindrome string and Should return false', () => {
    const givenString = 'Iamnotpalindrome'
    expect(isPalindrome(givenString)).to.be.false
  })

  it('Gets an mixed case palindrome string and Should return false', () => {
    const givenString = 'ANnA'
    // Note that case handling done in cleanString function
    expect(isPalindrome(givenString)).to.be.false
  })

  it('Gets an large  palindrome string and Should return true', () => {
    const givenString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel velit maximus, ultricies dui a, egestas nisl. Donec placerat purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel velit maximus, ultricies dui a, egestas nisl. Donec placerat purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel velit maximus, ultricies dui a, egestas nisl. Donec placerat purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel velit maximus, ultricies dui a, egestas nisl. Donec placerat purussurup tarecalp cenoD .lsin satsege ,a iud seicirtlu ,sumixam tilev lev mulubitseV .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL surup tarecalp cenoD .lsin satsege ,a iud seicirtlu ,sumixam tilev lev mulubitseV .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL surup tarecalp cenoD .lsin satsege ,a iud seicirtlu ,sumixam tilev lev mulubitseV .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL surup tarecalp cenoD .lsin satsege ,a iud seicirtlu ,sumixam tilev lev mulubitseV .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL'
    expect(isPalindrome(givenString)).to.be.true
  })
})

describe('calculateScore Function Tests ', () => {
  it('Gets an empty String and returns 0 points', () => {
    const givenString = ''
    expect(calculateScore(givenString)).to.be.equal(0)
  })
  it('Gets a 1 point worth String and returns 1 points', () => {
    const givenString = 'a'
    expect(calculateScore(givenString)).to.be.equal(1)
  })

  it('Gets a non polindrome String and returns 0 points', () => {
    const givenString = 'abc'
    expect(calculateScore(givenString)).to.be.equal(0)
  })

  it('Gets a mixed case 4 point worth polindrome String and returns 4 points', () => {
    const givenString = 'aNnA'
    expect(calculateScore(givenString)).to.be.equal(4)
  })
})
