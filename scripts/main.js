"use strict";
/*"use strict"
const FAV_PET = "Cats";
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


document.getElementById("display").innerHTML = s;