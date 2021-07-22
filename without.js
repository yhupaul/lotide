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
        console.log("line16");
        return false;
      }
    }
  }
  return true;
};

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

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);