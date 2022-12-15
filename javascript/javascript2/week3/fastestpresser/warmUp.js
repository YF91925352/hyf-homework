/*1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded. */
const script = document.createElement("script");
script.onload = setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);
/*2.Create a function that takes 2 parameters: delay and stringToLog */
function delayLog(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
delayLog(3, "This string logged after 3 seconds");
/*3.Create a button in html */
const btn = document.getElementsByTagName("input");
btn[0].addEventListener("click", () =>
  setTimeout(() => {
    console.log("Called after 5 seconds");
  }, 5000)
);
/*4.Create two functions and assign them to two different variables */
const earthLogger = () => {
  console.log("Earth");
};
const saturnLogger = () => {
  console.log("Saturn");
};
function planetLogFunction(planetLogger) {
  planetLogger();
}
planetLogFunction(earthLogger);
/* 5.Create a button with the text called "Log location".*/
const paraLocation = document.getElementById("location");
function getLocation() {
  paraLocation.innerHTML = "";
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    paraLocation.innerHTML = `This is the latitude:${latitude};This is the longitude:${longitude}`;
  }
  function error() {
    paraLocation.innerHTML = "Unable to obtain your location";
  }
  if (!navigator.geolocation) {
    paraLocation.innerHTML = "Your browser does not support geolocation";
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

btn[1].addEventListener("click", getLocation);
/* 6.Optional Now show that location on a map using fx the Google maps api */
/* 7.Create a function called runAfterDelay */
const runAfterDelay = (delay, callback) => setTimeout(callback, delay * 1000);
runAfterDelay(4, () => {
  console.log("should be logged after 4 seconds");
});
/* 8.Check if we have double clicked on the page. */
let clickCheck;
const paraClick = document.getElementById("click");
paraClick.innerHTML = "";
document.addEventListener("click", () => {
  clickCheck = false;
  setTimeout(() => {
    if (!clickCheck) {
      paraClick.innerHTML = "click once";
    }
  }, 500);
});
document.addEventListener("dblclick", () => {
  clickCheck = true;
  paraClick.innerHTML = "double click!";
});
/* 9.Create a function called jokeCreator that has three parameters */
const logFunnyJoke = () => {
  console.log("a funny joke");
};
const logBadJoke = () => {
  console.log("a bad joke");
};
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  return shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}
jokeCreator(true, logFunnyJoke, logBadJoke);
/* 10.Create an array with 3 items */
const fun1 = () => console.log(1);
const fun2 = () => console.log(2);
const fun3 = () => console.log(3);
const fun = [fun1, fun2, fun3];
fun.forEach((ele) => ele());
/* 11.Create a function as a const and try creating a function normally. */
/* test();
function test() {
  console.log(4);
}
const test = function () {
  console.log(5);
};
const test = function test() {
  console.log(6);
}; */
/* 12.Create an object that has a key whose value is a function. */
const testArr = {
  testFn: function () {
    console.log(7);
  },
};
testArr.testFn();
