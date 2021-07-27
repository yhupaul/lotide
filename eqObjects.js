const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keyArrOne = Object.keys(object1);
  let keyArrTwo = Object.keys(object2);
  if(keyArrOne.length !== keyArrTwo.length) {
    return false;
  } else{ 
  for (let keyOne of keyArrOne) {
    let match = false;
    for(let keyTwo of keyArrTwo) {
      if (Array.isArray(object1[keyOne]) && Array.isArray(object2[keyTwo]) && eqArrays(object1[keyOne], object2[keyTwo])){
       match = true;
      }
      if (keyOne === keyTwo && object1[keyOne] === object2[keyTwo]){
        match = true;
      }
    } 
    if (match === false) {
      return false
    }
    }
    return true;
  }
};

module.exports = eqObjects; 


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// console.log(eqObjects(cd, dc));

// console.log(eqObjects(cd, cd2));

// assertEqual(eqObjects(cd, cd2), true)