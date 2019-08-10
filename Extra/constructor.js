//this is another way of constructing objects without using the object literals

//here we going to make a constructor function
// the name of the function here is in caps letter
//this will state that the function name be initialised with the new keyword
//using the new keyword immediately makes it a constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let myCar = new Car("bmw", "745li", 2010);
console.log(myCar);
console.log(typeof myCar);
