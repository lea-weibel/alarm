const setBtn = document.getElementById("set-btn");
const goBtn = document.getElementById("go-btn");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const overlay = document.getElementById("overlay");

const hoursInput = document.getElementById("h-input");
const minutesInput = document.getElementById("m-input");
const secondsInput = document.getElementById("s-input");

const scndOverlay = document.getElementById("scnd-overlay");

const stopBtn = document.getElementById("stop-btn");

let alarmHours;
let alarmMinutes;
let alarmSeconds;

let myInterval;

const audio = new Audio("./assets/final-space-theme-song.mp3");
const savedHours = document.getElementById("saved-hours");
const savedMinutes = document.getElementById("saved-minutes");
const savedSeconds = document.getElementById("saved-seconds");

function setTime() {
  let time = new Date();
  if (time.getHours() < 10) hours.innerHTML = "0" + time.getHours();
  else hours.innerHTML = time.getHours();

  if (time.getMinutes() < 10) minutes.innerHTML = "0" + time.getMinutes();
  else minutes.innerHTML = time.getMinutes();

  if (time.getSeconds() < 10) seconds.innerHTML = "0" + time.getSeconds();
  else seconds.innerHTML = time.getSeconds();

  if (
    hours.innerHTML === alarmHours &&
    minutes.innerHTML === alarmMinutes &&
    seconds.innerHTML === alarmSeconds
  ) {
    scndOverlay.style.display = "block";
    audio.play();
    savedHours.innerHTML = alarmHours;
    savedMinutes.innerHTML = alarmMinutes;
    savedSeconds.innerHTML = alarmSeconds;
  }
}

window.onload = () => {
  setTime();
  myInterval = setInterval(setTime, 100);
};

setBtn.onclick = () => {
  overlay.style.display = "block";
};

goBtn.onclick = function () {
  overlay.style.display = "none";

  alarmHours = hoursInput.value;
  alarmMinutes = minutesInput.value;
  alarmSeconds = secondsInput.value;

  hoursInput.value = 00;
  minutesInput.value = 00;
  secondsInput.value = 00;
};

stopBtn.onclick = () => {
  scndOverlay.style.display = "none";
  audio.pause();
  audio.currentTime = 0;
};
