const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🙅‍♂🙅‍♂️🙅‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🙆‍♂️🙆‍♂️🙆‍♂️ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(allLetter) {
  let newLetters = allLetter.toLowerCase().replaceAll(" ", "")
  
  let results = {};
  for (const word of newLetters) {
     if (results[word]) {
       results[word] += 1;
     } else {
       results[word] = 1
     }
  }
 return results;
};


console.log(countLetters("lighthouse in the house"));