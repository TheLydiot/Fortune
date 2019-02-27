"use strict";

const CF = {};

CF.Dice = require('./dice');
CF.Attribute = require('../config/attributes');
CF.Race = require('../config/races');
CF.Background = require('../config/backgrounds');
CF.Trait = require('../config/traits');
CF.Alignment = require('../config/alignments');
CF.Class = require('../config/classes');
CF.Languages = require('../config/languages');
CF.Skills = require('../config/skills');

CF.Create = (race) => {
  let char = {};

  //  player can choose race
  race = race || CF.AssignRace();
  char.race = race.name;

  //  generate attributes
  char.attributes = CF.RollAttributes(race);
  char.height = null;
  char.weight = null;

  char.toString = () => {
    let str = "";
    str += char.attributes.toString();
    return str;
  }
  return char;
}

CF.AssignRace = () => {
  let races = Object.keys(CF.Race);
  return races[races.length * Math.random() << 0];
}

CF.RollAttributes = (race) => {
  let atts = {};
  atts.STR = CF.Dice.roll(...CF.Race[race].attributes.STR);
  atts.DEX = CF.Dice.roll(...CF.Race[race].attributes.DEX);
  atts.CON = CF.Dice.roll(...CF.Race[race].attributes.CON);
  atts.INT = CF.Dice.roll(...CF.Race[race].attributes.INT);
  atts.WIS = CF.Dice.roll(...CF.Race[race].attributes.WIS);
  atts.CHA = CF.Dice.roll(...CF.Race[race].attributes.CHA);
  atts.toString = () => {
    let str = "";
    str += "STR:" + atts.STR + " ";
    str += "DEX:" + atts.DEX + " ";
    str += "CON:" + atts.CON + " ";
    str += "INT:" + atts.INT + " ";
    str += "WIS:" + atts.WIS + " ";
    str += "CHA:" + atts.CHA + "\n";
    return str;
  }
  return atts;
};

module.exports = CF;