/*local scope */
let x = 10;
if (true) {
  let y = 20;
  let z = 30;
  console.log(x + y + z);
}
//multiple bindings with the same value
const halve = function(n) {
  return n / 2;
};
let n = 10;
console.log(halve(100));
console.log(n);
