"use strict";

const Race = {};

Race.Races = require('./Race.json');

Race.Random = () => {
  let races = Object.keys(Race.Races);
  return races[races.length * Math.random() << 0];
}

Race.GetInfo = (race) => {
  return Race.Races[race].info.description.join('  ');
}

module.exports = Race;