// task3-json.js
let data = [
  {
    name: "Wireless Mouse",
    price: 1000,
    inStock: "available",
  },
  {
    name: "Bluetooth Headphones",
    price: 1200,
    inStock: "no available now",
  },
  {
    name: "USB-C Charger",
    price: 1400,
    inStock: "available",
  },
  {
    name: "laptop",
    price: 1600,
    inStock: "no available now",
  },
  {
    name: "monitor",
    price: 1800,
    inStock: "no available now",
  },
];


const weatherForecasts = [
  {
    date: "2025-06-19",
    temperature: "32°C",
    conditions: "Sunny",
    humidity: "45%"
  },
  {
    date: "2025-06-20",
    temperature: "30°C",
    conditions: "Partly Cloudy",
    humidity: "50%"
  },
  {
    date: "2025-06-21",
    temperature: "28°C",
    conditions: "Light Rain",
    humidity: "65%"
  },
  {
    date: "2025-06-22",
    temperature: "29°C",
    conditions: "Cloudy",
    humidity: "60%"
  },
  {
    date: "2025-06-23",
    temperature: "31°C",
    conditions: "Sunny",
    humidity: "40%"
  },
  {
    date: "2025-06-24",
    temperature: "33°C",
    conditions: "Hot and Sunny",
    humidity: "35%"
  },
  {
    date: "2025-06-25",
    temperature: "27°C",
    conditions: "Thunderstorms",
    humidity: "70%"
  }
];


module.exports = { data , weatherForecasts };


