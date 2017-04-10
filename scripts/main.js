"use strict";
/*const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
*/
// ES6: Declare a Read-Only Variable with the const Keyword

// change 'var' to 'let' or 'const'
// rename constant variables
const PI = 3.14;
const RADIUS = 10;
let calculateCircumference = function(r) {
  let diameter = 2 * r;
  let result = PI * diameter;
  return result;
};
console.log(calculateCircumference(RADIUS));
// Test your code

//ES6: Mutate an Array Declared with const
const s = [ 5, 7, 2 ];
// change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
// change code above this line
// Test your code
console.log(s);
//ES6: Use Arrow Functions to Write Concise Anonymous Functions
"use strict";
// change code below this line
const magic = () => {
  return new Date();
};

//ES6: Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

//ES6: Write Higher Order Arrow Functions
"use strict";
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
// change code below this line
var squaredIntegers = realNumberArray.filter( e => e > 0).map(e => e*e);
// change code above this line
// test your code




document.getElementById("display").innerHTML = squaredIntegers;