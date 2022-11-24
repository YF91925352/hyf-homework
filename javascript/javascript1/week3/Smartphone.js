/* Adding an activity */
const activities = [];
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}
/* get and format today date automaticly*/
const today = new Date().toLocaleDateString("en-GB");
addActivity(today, "youtube", 40);
addActivity(today, "bilibili", 50);
addActivity(today, "twitter", 20);
addActivity("31/10/2022", "ins", 20);
console.log(activities);

/* Show my status */
function showStatus(activities) {
  if (activities.length) {
    /* specify date */
    const activitiesSpecifyDate = activities.filter(
      (content) => content.date === new Date().toLocaleDateString("en-GB")
    );
    let initialValue = 0;
    let sumDuration = activitiesSpecifyDate.reduce(function (
      previousValue,
      currentValue
    ) {
      return previousValue + currentValue.duration;
    },
    initialValue);
    console.log(
      `You have added ${activitiesSpecifyDate.length} activities on ${today}. They amount to ${sumDuration} min. of usage`
    );
    /* Usage limit */
    function showLimitTime(limitTime) {
      return limitTime > sumDuration
        ? `Today is ${today}.You have reached your limit, no more smartphoning for you!`
        : `${today}.You can play more time`;
    }
    console.log(showLimitTime(120));
  } else {
    console.log(`Add some activities before calling showStatus`);
  }
}
showStatus(activities);

/* find the activity which costs most time */
const maxDuration = activities.reduce(function (a, b) {
  return a.duration > b.duration ? a : b;
});
console.log(`You have spent the most time on ${maxDuration.activity}`);
