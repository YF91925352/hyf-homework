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

function getEventWeekday(futureDays) {
  const today = newdate();
  const eventDate = (today.getDay() + futureDays) % dateArr.length;

  console.log(
    `Today is ${today} and the event is in ${futureDays} days.Therefore the event will be held on ${dateArr[eventDate]}.`
  );
}
