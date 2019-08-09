let car = {
  make: "bmw",
  color: "red",
  model: 6557,
  getPrice() {
    return "USD 5000";
  },
  printDescription() {
    console.log(this.make + " " + this.model + " " + this.color);
  }
};
car.printDescription();

console.log(car.model);
console.log(car.getPrice());

//we can also create properties using the following method
let personDetails = {};
personDetails.firstName = "Bashwili";
personDetails.lastName = "George";
personDetails.age = 34;
personDetails.skinTone = "dark";
console.log(personDetails);
console.log(
  personDetails.firstName + " is " + personDetails.age + " years old"
);
