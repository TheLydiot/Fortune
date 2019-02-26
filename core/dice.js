var Dice = {};

Dice.roll = (sides, numDice) => {
  let total = 0;
  for (var i = 0; i < numDice; i++) {
    total += Math.round(Math.random() * sides);
  }
  return total;
};

module.exports = Dice;