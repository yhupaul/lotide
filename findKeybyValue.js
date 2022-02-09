const assertEqual = require ('./assertEqual');

const findKeyByValue = function(object, keyValue) {
  let result;
  for (let key of Object.keys(object)) {

    if (object[key] === keyValue) {
      return key;
    }
  }
  return result;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
