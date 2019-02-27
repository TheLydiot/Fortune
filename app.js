"use strict";

//  modules
//const inquirer = require('inquirer');
//inquirer.prompt()

//  engines
const CF = require('./core/CharacterFoundry');


let char = CF.Create();
console.log("Character:\n" + char);