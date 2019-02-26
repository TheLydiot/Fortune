let Dice = require('./dice.js');

let Chargen = {};

Chargen.rollAttributes = (race) => {
  let atts = {};
  atts.STR = Dice.roll(...race.attributes.STR);
  atts.DEX = Dice.roll(...race.attributes.DEX);
  atts.CON = Dice.roll(...race.attributes.CON);
  atts.INT = Dice.roll(...race.attributes.INT);
  atts.WIS = Dice.roll(...race.attributes.WIS);
  atts.CHA = Dice.roll(...race.attributes.CHA);
  return atts;
};

Chargen.create = (race, klass) => {
  let char = {};
  char.attributes = Chargen.rollAttributes(race);
  char.race = race.name;
  char.klass = klass.name;
  char.toString = () => {
    let str = "";
    str += "Race: " + char.race + "\n";
    str += "Class: " + char.klass + "\n";
    return str;
  };
  return char;
}

module.exports = Chargen;