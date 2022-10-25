const todayDate = prompt("What day of the week is today?");
const futureDays = +prompt("How many days later the event will be held?");
const dateArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const countDays = futureDays % 7;
let eventDate;
for (i = 0; i < dateArr.length; i++) {
  if (todayDate === dateArr[i]) {
    j = i + countDays;
    if (j < 7) {
      eventDate = dateArr[j];
    } else {
      eventDate = dateArr[j % 7];
    }
  }
}
alert(
  `Today is ${todayDate} and the event is in ${futureDays} days.Therefore the event will be held on ${eventDate}.`
);
