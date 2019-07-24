function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };
whiteRabbit.speak("Oh my ears and whiskers," + "how let is it getting!");
hungryRabbit.speak("I could use a carrot right now.");
speak.call(hungryRabbit, "Burp!!");
