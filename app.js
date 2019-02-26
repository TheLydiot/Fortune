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

let char = Chargen.create(Race.Dwarf, Klass.Warrior);
// inquirer.prompt()

console.log("Character:\n" + char);