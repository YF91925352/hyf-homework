const countdown = document.getElementById("countdown");
const pressS = document.querySelector("#pressS");
const pressL = document.querySelector("#pressL");
const confettiElementS = document.getElementById("canvasS");
const confettiSettingsS = { target: confettiElementS };
console.log(confettiSettingsS);
const confettiS = new ConfettiGenerator(confettiSettingsS);
const confettiElementL = document.getElementById("canvasL");
const confettiSettingsL = { target: confettiElementL };
console.log(confettiSettingsL);
const confettiL = new ConfettiGenerator(confettiSettingsL);
let countTime = "0";
let flag;
let countS = 0;
let countL = 0;
let originalTime = "0";
btn[2].addEventListener("input", (e) => {
  originalTime = e.target.value;
  countTime = originalTime;
});

function fn() {
  flag = true;
  function countDown() {
    if (countTime === 0) {
      clearInterval(count);
      countdown.innerHTML = `Game Over`;
    } /* 1.countTime not written or 0 can not start the game */ else if (
      countTime == 0
    ) {
      clearInterval(count);
      countdown.innerHTML = `input the valid time`;
    } else {
      countdown.innerHTML = `${countTime} seconds left`;
      countTime--;
    }
  }
  const count = setInterval(countDown, 1000);
  /* 2.Pause the game, when press start/continue again, the game continues */ btn[5].addEventListener(
    "click",
    () => {
      clearInterval(count), (flag = false);
    }
  );
}
/* 3.s and l will start counting only when start/continue is pressed and the time is not empty or 0. Time stops, counting stops */
btn[3].addEventListener("click", fn);
/* 4.press restart,you can re-play this game again */
btn[4].addEventListener("click", () => {
  countTime = originalTime;
  fn();
  countS = 0;
  countL = 0;
  pressS.innerHTML = `Press S  `;
  pressL.innerHTML = `Press S `;
});
/* 5. */

document.addEventListener("keyup", (e) => {
  if (e.key === "s" && countTime != 0 && flag) {
    countS++;
    pressS.innerHTML = `Press S  ${countS}`;
  } else if (e.key === "l" && countTime != 0 && flag) {
    countL++;
    pressL.innerHTML = `Press L  ${countL}`;
  }
  if (countS > countL && countTime === 0 && flag) {
    confettiS.render();
    pressS.innerHTML = `Press S  ${countS} You win`;
    pressL.innerHTML = `Press L  ${countL} You lose`;
  } else if (countS < countL && countTime === 0 && flag) {
    confettiL.render();
    pressS.innerHTML = `Press S  ${countS}  You lose`;
    pressL.innerHTML = `Press L  ${countL}  You win`;
  } else if (countS === countL && countTime === 0 && flag) {
    pressS.innerHTML = `Press S  ${countS}  It's a draw`;
    pressL.innerHTML = `Press L  ${countS}  It's a draw`;
  }
});
