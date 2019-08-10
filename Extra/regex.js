let pattern = /xyz/;
console.log(typeof pattern);
let value = "Get to watch the xyz show live tomorrow";
//to give out a boolean expression whether there exists such an expression

console.log(pattern.test(value)); // output here will be true
//if you want to replace the xyz with a given word

console.log(value.replace(pattern, "churchill"));
