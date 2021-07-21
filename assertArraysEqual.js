const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🙅‍♂🙅‍♂️🙅‍♂️ Assertion Failed`);
  } else {
    console.log(`🙆‍♂️🙆‍♂️🙆‍♂️ Assertion Passed`);
  }
};


const eqArrays = function (arrayOne, arrayTwo) {
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

