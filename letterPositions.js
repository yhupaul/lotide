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
        return false;
      }
    }
  }
  return true;
};

// assertArraysEqual(letterPositions("hello").e, [1]);


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));