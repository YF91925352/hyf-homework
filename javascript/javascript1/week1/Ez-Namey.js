const randomNumber = Math.floor(Math.random() * 10);
let firstWords = [
  "boss",
  "pak",
  "blast",
  "sensor",
  "loop",
  "lethal",
  "ace",
  "techbia",
  "chip",
  "knight",
];
let secondWords = [
  "smart",
  "bold",
  "super",
  "fun",
  "core",
  "cool",
  "Rentoor",
  "Kiddily",
  "Hiphonic",
  "SalePush",
];

let startupName = firstWords[randomNumber] + secondWords[randomNumber];
console.log(
  `The startup:${startupName} contains ${startupName.length} characters.`
);
