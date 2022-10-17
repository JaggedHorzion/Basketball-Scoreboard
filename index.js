let scoreHome = 0
let scoreGuest = 0

document.getElementById("score-home-el").textContent = scoreHome
document.getElementById("score-guest-el").textContent = scoreGuest

let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")

function freethrowHome() {
  scoreHome += 1
  scoreHomeEl.textContent = scoreHome
  if (scoreHome >= scoreGuest) {
    homeTitle.style.color = "#00FF00";
    guestTitle.style.color = "#FFFFFF";

  } else {
    homeTitle.style.color = "#FFFFFF";
    guestTitle.style.color = "#00FF00";
  }
}


function midrangeHome() {
  scoreHome += 2
  scoreHomeEl.textContent = scoreHome
  if (scoreHome >= scoreGuest) {
    homeTitle.style.color = "#00FF00";
    guestTitle.style.color = "#FFFFFF";

  } else {
    homeTitle.style.color = "#FFFFFF";
    guestTitle.style.color = "#00FF00";
  }
}

function longthreeHome() {
  scoreHome += 3
  scoreHomeEl.textContent = scoreHome
  if (scoreHome >= scoreGuest) {
    homeTitle.style.color = "#00FF00";
    guestTitle.style.color = "#FFFFFF";

  } else {
    homeTitle.style.color = "#FFFFFF";
    guestTitle.style.color = "#00FF00";
  }
}

function freethrowGuest() {
  scoreGuest += 1
  scoreGuestEl.textContent = scoreGuest
  if (scoreGuest >= scoreHome) {
    guestTitle.style.color = "#00FF00";
    homeTitle.style.color = "#FFFFFF";

  } else {
    guestTitle.style.color = "#FFFFFF";
    homeTitle.style.color = "#00FF00";
  }
}

function midrangeGuest() {
  scoreGuest += 2
  scoreGuestEl.textContent = scoreGuest
  if (scoreGuest >= scoreHome) {
    guestTitle.style.color = "#00FF00";
    homeTitle.style.color = "#FFFFFF";

  } else {
    guestTitle.style.color = "#FFFFFF";
    homeTitle.style.color = "#00FF00";
  }
}

function longthreeGuest() {
  scoreGuest += 3
  scoreGuestEl.textContent = scoreGuest
  if (scoreGuest >= scoreHome) {
    guestTitle.style.color = "#00FF00";
    homeTitle.style.color = "#FFFFFF";

  } else {
    guestTitle.style.color = "#FFFFFF";
    homeTitle.style.color = "#00FF00";
  }
}

const timeEl = document.querySelector('.timer-board .timer-time');
const startEl = document.getElementById("start-el");
const pauseEl = document.getElementById("pause-el");
const resetEl = document.getElementById("reset-el");

let seconds = 0;
let interval = null;

startEl.addEventListener('click',  start);
pauseEl.addEventListener('click', stop);
resetEl.addEventListener('click', reset);

function timer () {
  seconds++;
   let mins = Math.floor(seconds / 60);
   let secs = seconds % 60;
   
   if (secs < 10) secs = '0' + secs;
   if (mins < 10) mins = '0' + mins;

    timeEl.innerText = `${mins}:${secs}`; 

}

function start () {
  if (interval) {
    return
  }

  interval = setInterval(timer, 1000);
}

function stop () {
  clearInterval(interval);
  interval = null;
}

function reset () {
  stop();
  seconds = 0;
  timeEl.innerText = '00:00';
}
//console.log("Im clicked!")










