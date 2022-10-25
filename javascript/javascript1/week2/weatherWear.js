const todayTemperature = +prompt("Please enter the temperature of today");
function wearSuitableClothes(temp) {
  if (temp < -10) {
    return "Today is very cold, you should wear a thick down jacket,a hat and gloves.";
  } else if (temp < 5 && temp >= -10) {
    return "Today is cold, you should wear a thick down jacket.";
  } else if (temp < 10 && temp >= 5) {
    return "Today is cool, you should wear a sweater.";
  } else if (temp < 20 && temp >= 10) {
    return "Today is warm, you should wear a jacket.";
  } else if (temp < 30 && temp >= 20) {
    return "Today is hot, you should wear a T-shirt.";
  } else if (temp >= 30) {
    return "Today is extremely hot, you should stay at home.";
  }
}
const clothesToWear = wearSuitableClothes(todayTemperature);
console.log(clothesToWear);
