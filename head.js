const assertEqual = require('./assertEqual');

let head = function(array) {
  return array[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
