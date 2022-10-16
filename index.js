let scoreHome = 0
let scoreGuest = 0

document.getElementById("score-home-el").textContent = scoreHome
document.getElementById("score-guest-el").textContent = scoreGuest

let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

<<<<<<< HEAD
let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")
=======
//let homeTitle = document.getElementsByClassName("home-title")



>>>>>>> 66b18bf3923b3f8296991d3fddc391d758045cea

function freethrowHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
<<<<<<< HEAD
   if (scoreHome >= scoreGuest) {
      homeTitle.style.color = "#00FF00";
      guestTitle.style.color = "#FFFFFF";

   } else {
      homeTitle.style.color = "#FFFFFF";
      guestTitle.style.color = "#00FF00";
}
=======

>>>>>>> 66b18bf3923b3f8296991d3fddc391d758045cea
}
 
 
 function midrangeHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
<<<<<<< HEAD
    if (scoreHome >= scoreGuest) {
      homeTitle.style.color = "#00FF00";
      guestTitle.style.color = "#FFFFFF";

   } else {
      homeTitle.style.color = "#FFFFFF";
      guestTitle.style.color = "#00FF00";
}
}
=======
 }
>>>>>>> 66b18bf3923b3f8296991d3fddc391d758045cea
 
  function longthreeHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
<<<<<<< HEAD
    if (scoreHome >= scoreGuest) {
      homeTitle.style.color = "#00FF00";
      guestTitle.style.color = "#FFFFFF";

   } else {
      homeTitle.style.color = "#FFFFFF";
      guestTitle.style.color = "#00FF00";
}
}
=======
 }
>>>>>>> 66b18bf3923b3f8296991d3fddc391d758045cea
 
 function freethrowGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
<<<<<<< HEAD
    if (scoreGuest >= scoreHome) {
      guestTitle.style.color = "#00FF00";
      homeTitle.style.color = "#FFFFFF";

   } else {
      guestTitle.style.color = "#FFFFFF";
      homeTitle.style.color = "#00FF00";
}
}   
=======
    
 }
>>>>>>> 66b18bf3923b3f8296991d3fddc391d758045cea
 
 function midrangeGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
<<<<<<< HEAD
    if (scoreGuest >= scoreHome) {
      guestTitle.style.color = "#00FF00";
      homeTitle.style.color = "#FFFFFF";

   } else {
      guestTitle.style.color = "#FFFFFF";
      homeTitle.style.color = "#00FF00";
}
}
=======
 }
>>>>>>> 66b18bf3923b3f8296991d3fddc391d758045cea
 
  function longthreeGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
<<<<<<< HEAD
    if (scoreGuest >= scoreHome) {
      guestTitle.style.color = "#00FF00";
      homeTitle.style.color = "#FFFFFF";

   } else {
      guestTitle.style.color = "#FFFFFF";
      homeTitle.style.color = "#00FF00";
}
}

 








=======
 }
 
>>>>>>> 66b18bf3923b3f8296991d3fddc391d758045cea
