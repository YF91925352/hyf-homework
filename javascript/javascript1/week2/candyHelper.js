const boughtCandyPrices = [];
const candyTable = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGum: 0.03,
};
const amountToSpend = Math.random() * 100;
let amountShouldPay = 0;
function addCandy(candyType, weight) {
  boughtCandyPrices.push(weight * candyTable[candyType]);
  function canBuyMoreCandy() {
    for (i = 0; i < boughtCandyPrices.length; i++) {
      amountShouldPay += boughtCandyPrices[i];
    }
    if (amountToSpend >= amountShouldPay) {
      console.log("You can buy more, so please do!");
    } else {
      aconsole.log("Enough candy for you!");
    }
  }
  canBuyMoreCandy();
}
addCandy("sweet", 20);
addCandy("chocolate", 20);
addCandy("toffee", 20);
