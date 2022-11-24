const spiritAnimal = [
  "grace butterfly",
  "curiosity cat",
  "peace dove",
  "wisdom dolphin",
  "crafty fox",
  "compassionate hawk",
  "courage lion",
  "punctual peacock",
  "brave tiger",
  "cute pig",
];
const botton = document.getElementById("button");
const btn = document.getElementsByTagName("button");
const text = document.getElementById("yourName");
const para = document.querySelector("p");
function fn() {
  if (text.value === "") {
    alert("You need to input your name");
    return false;
  } else {
    para.innerHTML =
      text.value + " - " + spiritAnimal[Math.floor(Math.random() * 10)];
  }
}
botton.addEventListener("click", function (e) {
  switch (e.target.innerHTML) {
    case btn[0].innerHTML:
      fn();
      btn[0].disabled = true;
      break;
    case btn[1].innerHTML:
      fn();
      break;
    case btn[2].innerHTML:
      fn();
      text.addEventListener("mouseenter", function () {
        btn[0].disabled = true;
        btn[1].disabled = true;
        return text.value
          ? (para.innerHTML =
              text.value + " - " + spiritAnimal[Math.floor(Math.random() * 10)])
          : false;
      });
      text.addEventListener("mouseout", function () {
        btn[0].disabled = false;
        btn[1].disabled = false;
      });

      break;
  }
});
