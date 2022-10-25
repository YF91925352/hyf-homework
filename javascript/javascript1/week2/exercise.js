const balance = 1000;
if (balance <= 0) {
  console.log("Please deposit some money!");
} else if (balance > 0 && balance <= 1000) {
  console.log("Your balance is looking okay");
} else if (balance > 1000 && balance <= 3000) {
  console.log("Your balance is looking good");
} else if (balance > 3000 && balance <= 10000) {
  console.log("Your balance is fantastic");
} else if (balance >= 10000) {
  console.log("Your balance is AMAZING!");
}

let result;
result = "a + b < 4 " ? "Below" : "Over";
console.log(result);

let i;
for (i = 10; i >= 0; i--) {
  if (i === 10) {
    console.log("OMG it started");
  } else if (i === 0) {
    console.log("Happy new year!");
  } else {
    console.log(i);
  }
}

let count = 0;
const friendName = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];
for (i = 0; i < friendName.length; i++) {
  if (friendName[i].includes("a")) {
    count++;
  } else {
    console.log(friendName[i]);
  }
}
console.log(count);

for (i = 0; i < friendName.length; i++) {
  if (friendName[i] === "Lola") {
    console.log("I find Lola!");
    break;
  } else {
    console.log(friendName[i]);
  }
}

function min(a, b) {
  const leastNumber = a <= b ? a : b;
  return leastNumber;
}

function getCircleArea(radius) {
  if (!isNaN(radius)) {
    return Math.PI * Math.pow(radius, 2);
  } else {
    alert("Please enter a number");
  }
}

function celciusToFahreneit(celcius) {
  return (celcius * 9) / 5 + 32;
}
