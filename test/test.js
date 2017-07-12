const assert = require('assert')
const AlwaysRock = require('../alwaysRock')
const AlwaysPaper = require('../alwaysPaper')
const AlwaysScissors = require('../alwaysScissors')

describe('Rock, Paper, Scissors', function() {
  describe('Paper beats Rock', function() {
    it('Test A vs. B', function() {
      const bot1 = new AlwaysRock()
      const bot2 = new AlwaysPaper()
      winCount = runGame(bot1, bot2)
      console.log(bot1.name(), winCount[0], bot2.name(), winCount[1])
      assert.equal(1000, winCount[1])
    })
  })
  describe('Rock beats Scissors', function() {
    it('Test A vs. B', function() {
      const bot1 = new AlwaysRock()
      const bot2 = new AlwaysScissors()
      winCount = runGame(bot1, bot2)
      console.log(bot1.name(), winCount[0], bot2.name(), winCount[1])
      assert.equal(1000, winCount[0])
    })
  })
  describe('Scissors beats Paper', function() {
    it('Test A vs. B', function() {
      const bot1 = new AlwaysScissors()
      const bot2 = new AlwaysPaper()
      winCount = runGame(bot1, bot2)
      console.log(bot1.name(), winCount[0], bot2.name(), winCount[1])
      assert.equal(1000, winCount[0])
    })
  })



  function compareRound(bot1Play, bot2Play){
    // Rock == 1
    // Paper == 2
    // Scissors == 3
    if(bot1Play == bot2Play){
      return null
    } else if(bot1Play == 1 && bot2Play == 2){
      return 1
    }else if(bot1Play == 2 && bot2Play == 3){
      return 1
    }else if(bot1Play == 3 && bot2Play == 1){
      return 1
    }else{
      return 0
    }
      //index of player to award win to
      if(bot1Play > bot2Play){
        lastResult = 0
      } else {
        lastResult = 1
      }


  }

  function runGame(bot1, bot2){
    //Bots should accept null as a decision from previous game (first round) or tie
    let lastResult = null
    const winCount = [0,0]
    for(let i = 0; i < 1000 ; i++){

      //Get next play from both bots
      const bot1Play = bot1.next(lastResult ? lastResult == 0 : null)
      const bot2Play = bot2.next(lastResult ? lastResult == 1 : null)

      roundWinner = compareRound(bot1Play, bot2Play)
      winCount[roundWinner] = winCount[roundWinner] + 1
    }
    return winCount
  }
})
