
let tail = function(array) {
  if (array.length < 3) {
    return null;
  }
  return array.slice(1);
};

module.exports = tail;