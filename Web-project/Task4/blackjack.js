let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false // we use this so we can store its value when such block of code run
let isAlive = true
let message = ""
console.log(sum)

let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
console.log(sumEl)
// if we get <21 less than 21 then we need some more to reach 21 
// if we get above 21 oops out from game
// if we get 21 woh we won
function startGame(){
sumEl.textContent = "Sum: " + sum
if (sum < 21){
    message="Do you want to draw a new card?"
    
}
else if (sum === 21){
    message = "Woh! You've got Blackjack!"
    hasBlackJack = true // now value stores there cause this block of code run after 21 === 21
}
else {
    message = "You're out of the game!"
    isAlive = false // when player is no longer in game and out of game
}
}
// display the message in the messageEL 
messageEl.textContent = message
console.log(message)
