var car = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    pristons: [{ maker: "bmw" }, { maker: "bmw2" }]
  },
  drive: function() {
    return "drive in objects";
  }
};
var array = [
  "string",
  100,
  ["embedd", 200],
  { car: "ford" },
  function() {
    return "drive in array";
  }
];
delete car.speed; //delete a property member
car.make = "ford"; //changing property of the car
//console.log(car.make);
console.log(car["make"]); //another way of doing this without using the dot notation
console.log(car.engine.pristons[0].maker); //Computer member access
console.log(car.drive());
console.log(array[4]());
console.log(car); //will output the new value of the car make to ford
console.log(array.length); //check the list values in the array
