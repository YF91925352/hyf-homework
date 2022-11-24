/* Fibonacci Sequence */
function fibonacci(n) {
  if (n === 1) {
    return 0;
  } else if (n == 2 || n == 3) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
console.log(fibonacci(10));
/* Fizz buzz */
function fizzBuzz(a, b) {
  let newNumber = 0;
  const result = [];
  for (i = 0; i < 100; i++) {
    newNumber++;
    if (newNumber % a === 0 && newNumber % b === 0) {
      result.push("FizzBuzz");
    } else if (newNumber % a === 0) {
      result.push("Fizz");
    } else if (newNumber % b === 0) {
      result.push("Buzz");
    } else {
      result.push(newNumber);
    }
  }
  console.log(result);
}
fizzBuzz(4, 12);
/* Build a sentiment analyzer */
const positiveWords = [
  "amazing",
  "awesome",
  "happy",
  "great",
  "gorgeous",
  "miraculous",
  "masterful",
  "polished",
];
const negativeWords = [
  "anxious",
  "barbed",
  "boring",
  "creepy",
  "depressed",
  "distress",
  "filthy",
  "grim",
];
function getSentimentScore(sentence) {
  let countPositive = 0;
  let countNegative = 0;
  const matchedPositive = [];
  const matchedNegative = [];
  const everyWordsfromSentence = sentence.split(" ");
  everyWordsfromSentence.forEach((item) => {
    positiveWords.forEach((positiveWordsElement) => {
      if (positiveWordsElement === item) {
        matchedPositive.push(positiveWordsElement);
        return countPositive++;
      }
    });
    negativeWords.forEach((negativeWordsElement) => {
      if (negativeWordsElement === item) {
        matchedNegative.push(negativeWordsElement);
        return countNegative++;
      }
    });
  });
  return `score:${
    countPositive - countNegative
  }\n positiveWords:${matchedPositive}\n negativeWords:${matchedNegative}`;
}
const sentimentScoreObject = getSentimentScore(
  `When I am at home , I am amazing , awesome and gorgeous , but outside I am anxious and grim`
);
console.log(sentimentScoreObject);
/* Credit card number formatter */
function judgeNumber(number) {
  const reg = /^[1-9]+[0-9]*]*$/;
  if (!reg.test(number)) {
    alert("Please enter an number");
    return false;
  } else {
    function formattedCreditCardObject(number) {
      const numberToString = String(number);
      const eachNumber = numberToString.split("");
      for (i = 0; i < eachNumber.length; i++) {
        if ((i + 1) % 5 === 0) {
          eachNumber.splice(i, 0, " ");
        }
      }
      return eachNumber.join("");
    }
    console.log(formattedCreditCardObject(number));
  }
}
judgeNumber(123744757834859);
/* Character frequencies */
function getCharacterFrequencies(str) {
  const countStr = {};
  str
    .split("")
    .forEach((eachStr) =>
      countStr[eachStr] ? countStr[eachStr]++ : (countStr[eachStr] = 1)
    );
  return countStr;
}
console.log(getCharacterFrequencies("asfcvdgarsa"));
/* Palindromic substring */
function findTheLongestPalindromic(string) {
  let longestString = "";
  for (i = 0; i < string.length; i++) {
    for (j = 1; j <= string.length; j++) {
      const splitString = string.slice(i, j);
      if (
        splitString === splitString.split("").reverse().join("") &&
        splitString.length >= longestString.length
      ) {
        longestString = splitString;
      }
    }
  }
  return longestString;
}
console.log(findTheLongestPalindromic("ghbgyfhjacvfglevelkhygf"));
/* Credit card info */
function getCardInfo(cardNumber) {
  const firstNumber = cardNumber.toString();
  if (firstNumber.substring(0, 1) === "4") {
    return "visa";
  } else if (firstNumber.substring(0, 1) === "5") {
    return "mastercard";
  } else if (
    firstNumber.substring(0, 2) === "34" ||
    firstNumber.substring(0, 2) === "37"
  ) {
    return "American Express";
  } else if (firstNumber.substring(0, 2) === "62") {
    return "UnionPay";
  }
}
console.log(getCardInfo(62412435));
/* Tic Tac Toe */
