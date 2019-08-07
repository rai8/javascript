const list1 = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];
const combinedList = [...list1, ...list2];
console.log(combinedList);
//we can also do that with opjects
const person = {
  firstName: "Rhytonne",

  lastName: "Brite"
};
const location = {
  Location: "Chaani",
  County: "Mombasa"
};
const fullDetails = { ...person, ...location };
console.log(fullDetails);
