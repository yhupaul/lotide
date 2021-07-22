const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🙅‍♂🙅‍♂️🙅‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🙆‍♂️🙆‍♂️🙆‍♂️ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(object, keyValue) {
  let result;
  for (let key of Object.keys(object)) {

    if (object[key] === keyValue) {
      return key;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);