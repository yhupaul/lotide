const eqArrays = require('./eqArrays');

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