/* Item array removal */
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
names.splice(names.indexOf(nameToRemove), 1);
console.log(names);

/* When will we be there?? */
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calculateTime(travelInformation) {
  const travelTimeHour =
    travelInformation.destinationDistance / travelInformation.speed;
  const hour = Math.floor(travelTimeHour);
  const minutes = Math.floor((travelTimeHour - hour) * 60);
  return `${hour} hours and ${minutes} minutes`;
}
console.log(calculateTime(travelInformation));

/* Series duration of my life */
const seriesDurations = [
  {
    title: "Modern Family",
    days: 8,
    hours: 14,
    minutes: 28,
  },
  {
    title: "Reply 1988",
    days: 1,
    hours: 16,
    minutes: 0,
  },
  {
    title: "American Horror Story",
    days: 4,
    hours: 3,
    minutes: 24,
  },
];
const percentageInLife = [];
let totalTime = 0;
function logOutSeriesText() {
  for (i = 0; i < seriesDurations.length; i++) {
    let percentage =
      ((seriesDurations[i].days +
        seriesDurations[i].hours / 24 +
        seriesDurations[i].minutes / (24 * 60)) /
        (80 * 360)) *
      100;
    percentageInLife.push(percentage);
    totalTime += percentageInLife[i];
    console.log(
      `${seriesDurations[i].title} took ${percentageInLife[i].toFixed(
        3
      )}% of my life`
    );
  }
  console.log(`In total that is ${totalTime.toFixed(2)}% of my life`);
}

logOutSeriesText();
