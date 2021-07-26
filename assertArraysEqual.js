const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (!(eqArrays(arrayOne, arrayTwo))) {
    console.log(`😡😡😡 Assertion Failed`);
  } else {
    console.log(`😁😁😁 Assertion Passed`);
  }
};

module.exports = assertArraysEqual;



