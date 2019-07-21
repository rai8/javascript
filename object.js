let example1 = {
  Fname: "Rhytonne",
  Lname: "Brite"
};
console.log(example1.Fname + " " + example1.Lname);
/*Assigning new obect in javascript*/
let example3 = {
  Firstname: "Spongebob"
};
let example4 = Object.assign({}, example3);
example4.Lastname = "Squarepants";
console.log(example3.Firstname + " " + example4.Lastname);
//
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15; // reassigning a new value to object1, this applies when you have defined your values with let and not const
console.log(object2.value);
console.log(object3.value);
