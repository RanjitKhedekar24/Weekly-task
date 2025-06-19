const prompt = require("prompt-sync")();

let guestList = ["om", "vaishnavi", "durvas", "diksha", "sanika", "pratik"];

let gname = prompt("Please enter guest name: ");

if (guestList.includes(gname)) {
  console.log(`Welcome to the party, ${gname}!`);
} else {
  console.log("Sorry, you're not on the guest list.");
}
