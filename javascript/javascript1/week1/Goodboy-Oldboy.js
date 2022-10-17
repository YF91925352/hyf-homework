let dogyearOfBirth = prompt("Please enetr your dog birth year");
let dogyearOfBirthNumber = Number(dogyearOfBirth);
let dogyearFuture = prompt("Please enter the future year");
let dogyearFutureNumber = Number(dogyearFuture);
let humanYearAge = dogyearFutureNumber - dogyearOfBirthNumber;
let dogYearAge = 10 * humanYearAge;
let shouldShowResultInDogYears = prompt("Do you want to calculate in dog years?")
if (shouldShowResultInDogYears == "yes") { console.log("Your dog will be " + dogYearAge + " dog years old in " + dogyearFuture + "."); }
console.log("Your dog will be " + humanYearAge + " human years old in " + dogyearFuture + ".")