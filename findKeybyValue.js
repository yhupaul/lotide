
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
