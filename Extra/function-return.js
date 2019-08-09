function one() {
  return "the hell is this";
}
console.log(one());
let value = one;
console.log(typeof value);
console.log(value());

function two() {
  return function() {
    console.log("this is a will return a function inside a function");
  };
}
let myFunction = two();
myFunction();
