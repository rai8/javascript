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
    return "drive";
  }
};
var array = [
  "string",
  100,
  ["embedd", 200],
  { car: "ford" },
  function() {
    return "drive";
  }
];
console.log(car.engine.pristons[0].maker); //Computer member access
