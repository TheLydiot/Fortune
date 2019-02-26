var Dice = {};

Dice.roll = (sides, numDice, numKeep) => {
  let dice = [];
  for (var i = 0; i < numDice; i++) {
    dice.push(Math.round(Math.random() * (sides - 1)) + 1);
  }
  // sort, keep, and sum
  return dice.sort().splice(numDice - numKeep).reduce((total, num) => { return total + num; });
};

module.exports = Dice;