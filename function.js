/*function is a way of storing a code and using it */
function add() {
  console.log("add");
}
add();
/*taking parameters*/
function sum(num1, num2) {
  return num1 + num2;
}
function dif(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(sum(10, 7));
console.log(dif(10, 7));
console.log(multiply(10, 7));
/*Determining the square of a number */

const square = function(x) {
  return x * x;
};
/*funtion with no parameters */

const makeNoise = function() {
  console.log("Pling!");
};
makeNoise();
/*function with multiple parameters*/
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));

// declaring notations
console.log("The future says: ", future());
function future() {
  return "You'll be successful throughout your entire time";
}
//function defined as parameter, declared immediately after the parameters have beed defined
const square1 = x => {
  return x * x;
};
const square2 = x => x * x;
console.log(square1(9));
//still on creating function values

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
//function in summary
//defining f to hol a function value
const flame = function(a) {
  console.log(a + 2);
};
// declaring g to be a function
function g(a, b) {
  return a * b * 3.5;
}
//a less verbose function value
let h = a => a % 3;

//a function is a piece of code that does one or more actions
//a function can be called as many times as you want
function go() {
  alert("Hi");
  alert("Hey there");
}
go(); // calls out the function go

//function that has arguements
function namsey(name, age) {
  alert(name);
  alert(age);
}
namsey("Rhytone", 21);
