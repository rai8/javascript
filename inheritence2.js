class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("He's a staggering dude");
  }
}
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("He's an excellent teacher");
  }
}
const teacher = new Teacher("Brite", "Msc");
console.log(teacher);
