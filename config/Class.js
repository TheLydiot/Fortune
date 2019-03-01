"use strict";

const Class = {};

Class.Classes = require('./Class.json');

Class.Random = () => {
  let classes = Object.keys(Class.Classes);
  return classes[classes.length * Math.random() << 0];
}

Class.GetInfo = (klass) => {
  return Class.Classes[klass].info.description.join('  ');
}

module.exports = Class;