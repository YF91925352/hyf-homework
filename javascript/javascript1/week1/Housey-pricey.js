let peterWidth = +prompt("Please enter the width of Peter house");
let peterDeepth = +prompt("Please enter the deepth of Peter house");
let peterHeight = +prompt("Please enter the height of Peter house");
let peterGardenSizeInM2 = +prompt(
  "Please enter the garden size of Peter house"
);
let peterHousePrice =
  peterWidth * peterDeepth * peterHeight * 2.5 * 1000 +
  peterGardenSizeInM2 * 300;
let peterPayPrice = +prompt("Please enter the price Peter should pay");
if (peterHousePrice > peterPayPrice) {
  console.log("You should buy it.");
} else {
  console.log("You should consider about the price.");
}

let juliaWidth = +prompt("Please enter the width of julia house");
let juliaDeepth = +prompt("Please enter the deepth of julia house");
let juliaHeight = +prompt("Please enter the height of julia house");
let juliaGardenSizeInM2 = +prompt(
  "Please enter the garden size of julia house"
);
let juliaHousePrice =
  juliaWidth * juliaDeepth * juliaHeight * 2.5 * 1000 +
  juliaGardenSizeInM2 * 300;
let juliaPayPrice = +prompt("Please enter the price julia should pay");
if (juliaHousePrice > juliaPayPrice) {
  console.log("You should buy it.");
} else {
  console.log("You should consider about the price.");
}
