const person = {
  name: "Rhytone",
  walk() {
    console.log("He's a stammering dude");
  },
  talk() {
    console.log("He's a staggering dude");
  }
};
const walk = person.walk.bind(person);
const talk = person.talk.bind(person); // we introduce the bind method to attach it to the person object
walk();
walk();
