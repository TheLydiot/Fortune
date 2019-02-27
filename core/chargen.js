let Dice = require('./dice');

let Chargen = {};
Chargen.Races = require('../config/races');
Chargen.Klasses = require('../config/classes');
Chargen.Backgrounds = require('../config/backgrounds');
Chargen.Traits = require('../config/traits');

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

Chargen.create = (race, klass, bgs) => {
  let char = {};
  char.attributes = Chargen.rollAttributes(race);
  char.race = race.name;
  char.klass = klass.name;

  // random background
  let bgKeys = Object.keys(Chargen.Backgrounds);
  char.background = bgKeys[bgKeys.length * Math.random() << 0];

  // random traits
  let traitKeys = Object.keys(Chargen.Traits);
  char.traits = [].push(traitKeys[traitKeys.length * Math.random() << 0]);

  // starting HP = 0.5 * CON rounded up + class HD
  char.maxHP = char.currentHP = Math.round(char.attributes.CON / 2) + Dice.roll(klass.HD);

  char.toString = () => {
    let str = "";
    str += "Race:" + char.race + " ";
    str += "Class:" + char.klass + "\n";
    str += "Background:" + char.background + " ";
    str += "Traits:" + char.traits + "\n";
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