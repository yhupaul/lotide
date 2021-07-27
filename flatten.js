
// const flatten = function(array) {
//   return array.flat();
// };
const flatten = function(array) {
  let results = [];
  for (const ele of array) {
   
    if (!Array.isArray(ele)) {
      results.push(ele)
      ;
    } else  {
      for (const secEle of ele) {
        results.push(secEle)
        ;
      }
    }
  }
  console.log(results);
};
//flatten([1, [4, 5], 2, [6, 7], 3]);
module.exports = flatten;