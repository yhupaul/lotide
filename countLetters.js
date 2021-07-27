
const countLetters = function(allLetter) {
  let newLetters = allLetter.toLowerCase().replaceAll(" ", "");
  
  let results = {};
  for (const word of newLetters) {
    if (results[word]) {
      results[word] += 1;
    } else {
      results[word] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
