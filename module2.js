import { Person } from "./module1";

export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("He's an excellent teacher");
  }
}
