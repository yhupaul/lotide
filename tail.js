const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]);

// let tail = function(array) {
//   if (array.length < 3) {
//     return null;
//   }
//   return array.slice(1);
// };

module.exports = tail;