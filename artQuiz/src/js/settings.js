function settings() {
  const time = document.querySelector(".settings-button-number");
  const checkBox = document.querySelector(".ios8-switch");
  const save = document.querySelectorAll(".settings-save-button");
  const off = document.querySelector(".settings-time-turn");
  const volumeRang = document.querySelector(".volume-range");

  checkBox.addEventListener("click", gameOn);
  function gameOn() {
    if (checkBox.checked) {
      off.innerText = "On";
    } else {
      off.innerText = "Off";
    }
  }

  volumeRang.addEventListener("input", volumeChange);
  function volumeChange() {
    volumeRang.value;
  }

  save[0].addEventListener("click", () => {
    checkBox.checked = false;
    gameOn();
    time.value = 5;
    volumeRang.value = 50;
    localStorage.setItem("timeOfTimer", time.value);
    localStorage.setItem("TimerOn", checkBox.checked);
    localStorage.setItem("Volume", 50 / 100);
  });

  save[1].addEventListener("click", () => {
    localStorage.setItem("TimerOn", checkBox.checked);
    localStorage.setItem("timeOfTimer", time.value);
    localStorage.setItem("Volume", volumeRang.value / 100);
  });

  window.addEventListener("load", () => {
    let timeOfTimer = localStorage.getItem("timeOfTimer");
    time.value = timeOfTimer;
    volumeRang.value = localStorage.getItem("Volume") * 100;

    let timerOn = localStorage.getItem("TimerOn");
    if (timerOn == "true") {
      checkBox.checked = true;
    }
    gameOn();
  });
}

export { settings };
