/* Adding an activity */
const activities = [];
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}
/* get and format today date automaticly*/
addActivity(new Date().toLocaleDateString("en-GB"), "youtube", 40);
addActivity(new Date().toLocaleDateString("en-GB"), "bilibili", 50);
addActivity(new Date().toLocaleDateString("en-GB"), "twitter", 20);
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
      `You have added ${
        activitiesSpecifyDate.length
      } activities on ${new Date().toLocaleDateString(
        "en-GB"
      )}. They amount to ${sumDuration} min. of usage`
    );
    /* Usage limit */
    function showStatus(limitTime) {
      return limitTime > sumDuration
        ? `Today is ${new Date().toLocaleDateString(
            "en-GB"
          )}.You have reached your limit, no more smartphoning for you!`
        : `${new Date().toLocaleDateString("en-GB")}.You can play more time`;
    }
    console.log(showStatus(120));
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
