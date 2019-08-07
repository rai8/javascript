//if we have a function inside a function we refer to the function as the method of the object
const person = {
  name: "Mosh",
  walk: function() {
    console.log("He's a staggering nigga");
  },
  talk() {
    console.log("He's a stammering nigga");
  } //this is new way of declaring a function
};
// to access the members we use the dot notation
person.talk();
person.walk();
