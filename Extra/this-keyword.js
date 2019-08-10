function details() {
  console.log(this.firstName + " " + this.lastName);
}
let customer1 = {
  firstName: "hughtine",
  lastName: "weidner",
  print: details
};
let customer2 = {
  firstName: "kuligher",
  lastName: "tribiani",
  print: details
};
customer1.print();
customer2.print();
