function sayHello(name) {
  return function() {
    console.log("howdy " + name);
  };
}
let bob = sayHello("bob");
let conrad = sayHello("conrad");
let cotts = sayHello("cotts");
bob();
conrad();
cotts();

//closure allows one to associate some data witha givne function through input parameters and arguements stated out
//each closure gets its own lexical environment
