let a;
console.log(a);
console.log(typeof a);

//example2
let pattern = /xyz/;
let value = "We should visit the churchill show ";
let result = value.match(pattern);
console.log(result);
console.log(typeof result);
if (result === null) {
  console.log("no match was found");
}
/* null means that you simply had a variable where an object reference 
was expected but its not set to our variable
undefined means it was expecting a value but was not set */
