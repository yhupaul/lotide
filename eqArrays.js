const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🙅‍♂🙅‍♂️🙅‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🙆‍♂️🙆‍♂️🙆‍♂️ Assertion Passed: ${actual} === ${expected}`);
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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => "pass"