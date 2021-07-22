const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let keyArrOne = Object.keys(object1);
  let keyArrTwo = Object.keys(object2);
  if (keyArrOne.length !== keyArrTwo.length) {
    return false;
  } else {
    for (let keyOne of keyArrOne) {
      let match = false;
      for (let keyTwo of keyArrTwo) {
        if (Array.isArray(object1[keyOne]) && Array.isArray(object2[keyTwo]) && eqArrays(object1[keyOne], object2[keyTwo])) {
          match = true;
        }
        if (keyOne === keyTwo && object1[keyOne] === object2[keyTwo]) {
          match = true;
        }
      }
      if (match === false) {
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!(eqObjects(actual, expected))) {
    console.log(`🙅‍♂🙅‍♂️🙅‍♂️ Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙆‍♂️🙆‍♂️🙆‍♂️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]});