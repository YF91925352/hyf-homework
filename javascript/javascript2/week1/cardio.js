/* 1.1. Find the shortest word */
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findTheShortestWord(arr) {
  const shortestWord = arr.reduce((a, b) => (a.length < b.length ? a : b));
  console.log(shortestWord);
}
findTheShortestWord(danishWords);

/* 1.2. Find and count the Danish letters */
const danishString = "Blå grød med røde bær";
function findDanishLetters() {
  const danishSpecialLetters = ["æ", "ø", "å"];
  let count = 0;
  const eachLetter = danishString.toLowerCase().split("");
  const countLetters = {};
  for (let element of eachLetter) {
    if (danishSpecialLetters.includes(element)) {
      countLetters.total = count++;
      countLetters[element]
        ? countLetters[element]++
        : (countLetters[element] = 1);
    }
  }
  console.log(countLetters);
}
findDanishLetters(danishString);
