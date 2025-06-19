// let prompt = require("prompt-sync")();
// const a = require("./task-json.js");
// let date = prompt("Please enter date (e.g., 2025-06-20): ");

// let task5 = a.weatherForecasts;
// if (a.weatherForecasts.includes(date)) {
//   task5.map((weather) => {
//     console.log("date : " + weather.date);
//     console.log("temperature : " + weather.temperature);
//     console.log("conditions : " + weather.conditions);
//     console.log("humidity : " + weather.humidity);
//     console.log("**********************************");
//   });
// } else {
//   console.log("Sorry, no weather forecast available for that date.");
// }


const a = require("./task-json.js");

let task5 = a.weatherForecasts;

  task5.map((weather) => {
    console.log("date : " + weather.date);
    console.log("temperature : " + weather.temperature);
    console.log("conditions : " + weather.conditions);
    console.log("humidity : " + weather.humidity);
    console.log("**********************************");
  });




  //note :- when we enter a date they show else message