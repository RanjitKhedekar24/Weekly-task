const fs = require("fs");
const a = require('./task-json.js');  

let task3=a.data
task3.map((product) => {
  console.log("Name: " + product.name);
  console.log("Price: ₹" + product.price);
  console.log("In Stock: " + product.inStock);
  console.log("**********************************");
});

// fs.writeFile("data.txt",task3, "utf-8", (err) => {
//   if (err) {
//     console.log("Oops! Something went wrong. Please try again.");
//   } else {
//     console.log("it's your info");
//   }
// });