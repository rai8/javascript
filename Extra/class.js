//this is part of the syntactic sugar
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(`${this.make}, ${this.model} (${this.year})`);
  }
}

let car1 = new Car("bmw", "745li", 2010);
car1.print();

class SportsCar extends Car {
  revEngine() {
    console.log("vroooom goes the " + this.model);
  }
}
let sportCar1 = new SportsCar("dodge", "viper", 2015);
sportCar1.revEngine();
