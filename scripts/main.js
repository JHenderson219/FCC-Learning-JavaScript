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

//ES6: Set Default Parameters for Your Functions
function increment(number, value) {
   return value ? number+value : number+1;
}


function sum(...arr) {
    return arr.reduce((a, b) => a + b, 0);
}


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr2 = [];
// change code below this line
// change code above this line
arr1.push('JUN');
console.log(...arr1);

//ES6: Use Destructuring Assignment to Assign Variables from Objects
const greeting = 'itadakimasu';
// change code below this line
const { length } = greeting; // change this
// change code above this line
console.log(length); // should be using destructuring

//ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
const forecast = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
// change code below this line
const { tomorrow : {max: maxOfTomorrow} }  = forecast; // change this line
// change code above this line
console.log(maxOfTomorrow); // should be 84.6

document.getElementById("display").innerHTML = length;

//ES6: Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// change code below this line
[a,b] = [6,8];
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8

//ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
// change code below this line
const [,,...arr] = source; // change this
// change code below this line
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// change code below this line
const half = ({max,min}) => ((max + min) / 2.0); // use function argument destructurung
// change code above this line
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


document.getElementById("display").innerHTML = half(stats);