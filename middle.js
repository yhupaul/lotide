
const middle = function(array) {
  let midArr = [];
  let midIndex = Math.floor(array.length / 2);
  if (!(array.length >= 3)) {
    return array;
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

module.exports = middle;
