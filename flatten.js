
// const flatten = function(array) {
//   return array.flat();
// };
const flatten = function(array) {
  for (const ele of array) {
   
    if(!Array.isArray(ele)) {
      console.log(ele);
    }
      else  {
        for (const secEle of ele){
        console.log(secEle);
      }
    } 
  }
};
//flatten([1, 2, [3, 4], 5, [6]]);
module.exports = flatten;