"use strict";
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  register() {
    console.log(this.username + " is now registered");
  }
}
//let bob = new User("bob", "bob98@gmail.com", "12566"); // creating the object bob
//bob.register(); // calling the method register

class Member extends User {
  constructor(username, email, memberPackage) {
    super(username, email);
    this.memberPackage = memberPackage;
  }
  getPackage() {
    console.log(
      this.username + " is subscribed to the " + this.memberPackage + " package"
    );
  }
}
let mike = new Member("mike", "mike@email.com", "standard");
mike.getPackage();
