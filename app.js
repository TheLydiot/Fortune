"use strict";

//  modules
//const inquirer = require('inquirer');
//inquirer.prompt()

//  engines
// const CF = require('./core/CharacterFoundry');
// let char = CF.Create();
// console.log("Character:\n" + char);

const Race = require('./config/Race.js');

console.log(Race.Random());
console.log(Race.GetInfo("Elf"));

console.log(Class.Random());
console.log(Class.GetInfo("Ranger"));
