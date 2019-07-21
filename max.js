//max computes the maximum of all arguements, to write such functions put three dots before the function name
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -8, 23));
//or you can apply the following rule
let list = [5, 6, -4, 7];
console.log(max(...list)); /*we can also use Math.max or Math.min*/

//with strings
let words = ["never", "understands"];
console.log(["she", ...words, "me"]);
