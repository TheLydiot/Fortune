let Dice = require('./dice');

let Chargen = {};
Chargen.Races = require('../config/races');
Chargen.Klasses = require('../config/classes');
Chargen.Backgrounds = require('../config/backgrounds');
Chargen.Traits = require('../config/traits');
Chargen.Alignments = require('../config/alignments');



Chargen.create = (race) => {
  let char = {};

  //  player chooses race
  char.race = race.name;

  //  generate attributes
  char.attributes = Chargen.rollAttributes(race);
  char.height = null;
  char.weight = null;

  //  random background, traits (one physical one mental), and gold/starting gear
  //  background assigns traits in combo with race
  let bgKeys = Object.keys(Chargen.Backgrounds);
  char.background = bgKeys[bgKeys.length * Math.random() << 0];
  char.traits = [];
  let pTraitKeys = Object.keys(Chargen.Traits.physical);
  char.traits.push(pTraitKeys[pTraitKeys.length * Math.random() << 0]);
  let mTraitKeys = Object.keys(Chargen.Traits.mental);
  char.traits.push(mTraitKeys[mTraitKeys.length * Math.random() << 0]);
  char.wealth = {};
  char.wealth.gp = 120;
  char.inventory = {};
  char.inventory.wear = [];
  char.inventory.wear.push("normal clothing");
  char.inventory.hold = [];

  return char;
}

Chargen.assignAlignment = (char) => {

  return char;
}

  //  player chooses alignment, class, and equipment
  char.klass = 

  //  DM returns final scores and story

  // assign class as a separate function?  makes multi-classing easy




  // starting HP = 0.5 * CON rounded up + class HD
  char.maxHP = char.currentHP = Math.round(char.attributes.CON / 2) + Dice.roll(klass.HD);

  //  starting SP = 0.5 * WIS rounded up + class SD
  char.maxSP = char.currentSP = Math.round(char.attributes.WIS / 2) + Dice.roll(klass.SD);

  // story = log of events
  char.story = [];

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
    str += "HP:" + char.currentHP + " ";
    str += "SP:" + char.currentSP + "\n";
    str += "Story:" + char.story;
    return "\n" + str;
  };
  return char;
}

module.exports = Chargen;