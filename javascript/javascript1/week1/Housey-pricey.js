let width = +prompt("Please enter the width of your house");
let deepth = +prompt("Please enter the deepth of your house");
let height = +prompt("Please enter the height of your house");
let gardenSizeInM2 = +prompt("Please enter the garden size of your house");
let housePrice = width * deepth * height * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);