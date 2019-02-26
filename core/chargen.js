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

  // starting HP = 0.5 * CON rounded up + class HD
  char.maxHP = char.currentHP = Math.round(char.attributes.CON / 2) + Dice.roll(klass.HD);
  char.toString = () => {
    let str = "";
    str += "Race: " + char.race + "\n";
    str += "Class: " + char.klass + "\n";
    str += "STR:" + char.attributes.STR + " ";
    str += "DEX:" + char.attributes.DEX + " ";
    str += "CON:" + char.attributes.CON + " ";
    str += "INT:" + char.attributes.INT + " ";
    str += "WIS:" + char.attributes.WIS + " ";
    str += "CHA:" + char.attributes.CHA + " ";
    str += "HP:" + char.currentHP;
    return "\n" + str;
  };
  return char;
}

module.exports = Chargen;