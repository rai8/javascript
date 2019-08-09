let a = 6;
let b = "7";
b = parseInt(b, 10); //the 10 here represents the base number, the parseInt is used to change the string to integer
let z = a + b;
console.log(`The answer is ${z}`);
//trying to do the coercion with a literal string
let d = "Brite";
d = parseInt(d, 10);
console.log(d); // the output produced will be NaN
// to confirm whther the value of d is not a number
let e = isNaN(d);
console.log(e); // the output produced here will be true
