"use strict";

const Race = {};

Race.Races = require('./Race.json');

Race.Random = () => {
  let races = Object.keys(Race.Races);
  return races[races.length * Math.random() << 0];
}

Race.GetInfo = (race) => {
  return Race.races[race].description.toString();
}

module.exports = Race;