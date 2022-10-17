let yearOfBirth = prompt("Please enetr your birth year");
let yearOfBirthNumber = Number(yearOfBirth);
let yearFuture = prompt("Please enter the future year");
let yearFutureNumber = Number(yearFuture)
let age = yearFutureNumber - yearOfBirthNumber
console.log("You will be " + age + " years old in " + yearFuture + ".");
