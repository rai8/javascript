/* here we have something called the prototype chain */

let orginalCar = {
  make: "bmw",
  model: "745li",
  year: 2010
};
//creating new opbject using an existing object
let newCar = Object.create(orginalCar);
console.log(newCar.make);
