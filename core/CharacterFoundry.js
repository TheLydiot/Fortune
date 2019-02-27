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
  char.race = race;
  char.background = CF.AssignBackground(char.race);
  char.traits = CF.AssignTraits(char.race, char.background)

  //  generate attributes
  char.name = null;
  char.class = null;
  char.level = 0;
  char.attributes = CF.RollAttributes(char.race, char.background, char.traits);
  char.maxHP = char.currentHP = null;
  char.maxSP = char.currentSP = null;

  char.toString = () => {
    let str = "";
    str += "Name:" + char.name + " Race:" + char.race + "\n";
    str += "Background: " + char.background + " Traits:" + char.traits + "\n";
    str += "Class: " + char.class + " Level:" + char.level + "\n";
    str += char.attributes.toString();
    return str;
  }
  return char;
}

CF.AssignRace = () => {
  let races = Object.keys(CF.Race);
  return races[races.length * Math.random() << 0];
}

CF.AssignBackground = (race) => {
  let bgs = CF.Race[race].backgrounds;
  return bgs[bgs.length * Math.random() << 0];
}

CF.AssignTraits = (race, background) => {
  return {};
}

CF.RollAttributes = (race, background, traits) => {
  let atts = {};
  let args = [];

  args = CF.Race[race].attributes.STR;
  args[1] += CF.Background[background].attributes.includes("STR") * 1;
  atts.STR = CF.Dice.roll(...CF.Race[race].attributes.STR);

  args = CF.Race[race].attributes.DEX;
  args[1] += CF.Background[background].attributes.includes("DEX") * 1;
  atts.DEX = CF.Dice.roll(...CF.Race[race].attributes.DEX);

  args = CF.Race[race].attributes.CON;
  args[1] += CF.Background[background].attributes.includes("CON") * 1;
  atts.CON = CF.Dice.roll(...CF.Race[race].attributes.CON);

  args = CF.Race[race].attributes.INT;
  args[1] += CF.Background[background].attributes.includes("INT") * 1;
  atts.INT = CF.Dice.roll(...CF.Race[race].attributes.INT);

  args = CF.Race[race].attributes.WIS;
  args[1] += CF.Background[background].attributes.includes("WIS") * 1;
  atts.WIS = CF.Dice.roll(...CF.Race[race].attributes.WIS);

  args = CF.Race[race].attributes.CHA;
  args[1] += CF.Background[background].attributes.includes("CHA") * 1;
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