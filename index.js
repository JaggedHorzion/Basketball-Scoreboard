let scoreHome = 0
let scoreGuest = 0

document.getElementById("score-home-el").textContent = scoreHome
document.getElementById("score-guest-el").textContent = scoreGuest

let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

//let homeTitle = document.getElementsByClassName("home-title")




function freethrowHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome

}
 
 
 function midrangeHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
 }
 
  function longthreeHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
 }
 
 function freethrowGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
    
 }
 
 function midrangeGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
 }
 
  function longthreeGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
 }
 
