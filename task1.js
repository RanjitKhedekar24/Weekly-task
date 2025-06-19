let prompt = require("prompt-sync")();
let age = Number(prompt("Enter your age: "));

if (age <= 18) {
  console.log("You get a 20% discount!");
} else if (age > 64) {
  console.log("You get a 30% senior discount!");
} else {
  console.log("Normal ticket price applies.");
}
18