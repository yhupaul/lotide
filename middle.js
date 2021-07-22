const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (!(eqArrays(arrayOne, arrayTwo))) {
    console.log(`🙅‍♂🙅‍♂️🙅‍♂️ Assertion Failed`);
  } else {
    console.log(`🙆‍♂️🙆‍♂️🙆‍♂️ Assertion Passed`);
  }
};


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

const middle = function(array) {
  let midArr = [];
  let midIndex = Math.floor(array.length / 2);
  if (!(array.length > 3)) {
    return midArr;
  }
  if (!(array.length % 2 === 0)) {
    midArr.push(array[midIndex]);
    return midArr;
  } else {
    midArr.push(array[midIndex - 1]);
    midArr.push(array[midIndex]);
    return midArr;
  }
};
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));