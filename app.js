"use strict";

// modules
let inquirer = require('inquirer');
let readline = require('readline');

// config
let Race = require('./config/races.json');
let Klass = require('./config/classes.json');

// rules
let Dice = require('./core/dice.js');
let Chargen = require('./core/chargen.js');

let raceKeys = Object.keys(Race);
let race = raceKeys[raceKeys.length * Math.random() << 0];
let klassKeys = Object.keys(Klass);
let klass;
do {
  klass = klassKeys[klassKeys.length * Math.random() << 0];
} while (!Race[race].classes.includes(klass));
let char = Chargen.create(Race[race], Klass[klass]);
// inquirer.prompt()

console.log("Character:\n" + char);