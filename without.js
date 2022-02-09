const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');


const without = function(source, itemsToRemove) {
  let filterArr = [];
  if (eqArrays(source, itemsToRemove)) {
    return filterArr;
  }
  for (item of source) {
    //console.log("items",item);
    if (!(itemsToRemove.includes(item))) {
      filterArr.push(item);
    }
  }
  return filterArr;
};

module.exports = without;

assertArrayEqual(["1", "2", "3"], [1, 2, "3"]);
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));