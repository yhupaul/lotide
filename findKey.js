const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🙅‍♂🙅‍♂️🙅‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🙆‍♂️🙆‍♂️🙆‍♂️ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findkey = function(object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key]))  {
      return key;
    }
  }
};

const result = findkey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

//assertEqual((result), "noma");
console.log(result)