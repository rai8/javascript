var array = [
  "string",
  100,
  ["embedd", 200],
  { car: "ford" },
  function() {
    return "drive in array";
  }
];
//console.log(array.shift()); //removes the first element in te array and output the element it has removed
//console.log(array.pop()) - console.log(array); //deletes the last element in the array
/* array.unshift-write elements in the beginning of the array
array.push- write doen more elements to the end of the array
 */
console.log(array.splice(1, 0, "Rhytonne ", "Brite "));
console.log(array);
