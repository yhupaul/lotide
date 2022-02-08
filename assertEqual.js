const assertEqual = function(actual, expected) {

  if (actual.toString() !== expected.toString()) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  }
  
};

module.exports = assertEqual;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(3, 1);    //in order to confirm if it is working properly