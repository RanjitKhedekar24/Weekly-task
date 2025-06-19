const prompt = require("prompt-sync")();
const length = Number(prompt("Enter lenght of rectangle in meter: " ));
const width = Number(prompt("Enter width of rectangle meter: "));

var area=length * width

console.log("area of rectangle is " + area +" square meter" );
