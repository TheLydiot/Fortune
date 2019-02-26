"use strict";

// modules
let inquirer = require('inquirer');

// config
let Race = require('./config/races.json');
let Klass = require('./config/classes.json');
let Background = require('./config/backgrounds.json');

// rules
let Chargen = require('./core/chargen.js');

let raceKeys = Object.keys(Race);
let race = raceKeys[raceKeys.length * Math.random() << 0];
let klassKeys = Object.keys(Klass);
let klass = klassKeys[klassKeys.length * Math.random() << 0];
let char = Chargen.create(Race[race], Klass[klass], Background);
// inquirer.prompt()

console.log("Character:\n" + char);