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
console.log(car.engine.pristons[0].maker); //Computer member access
console.log(car.drive());
console.log(array[4]());
