let Dice = require('./dice.js');

let Combat = {};

Combat.attack = (attacker, defender, situation) => {
  let attackRoll = Dice.roll(20, 1) + attacker.attackBonus;

};

module.exports = Combat;