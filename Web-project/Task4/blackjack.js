// let firstCard = 6
// let secondCard = 9
// let sum = firstCard + secondCard
// let hasBlackJack = false // we use this so we can store its value when such block of code run
// let isAlive = true
// let message = ""
// console.log(sum)

// // delete lines 9 to 11
// let messageEl = document.getElementById("message-el")
// // 2. Store the sum paragraph in a variable called sumEl
// let sumEl = document.getElementById("sum-el")
// // or we can use querySelector
// // let sumEl = document.querySelector("#sum-el")
// // Here we have to specify about the type of content we want to show in sumEl, here its id = #sum-el

// console.log(sumEl)
// // if we get <21 less than 21 then we need some more to reach 21 
// // if we get above 21 oops out from game
// // if we get 21 woh we won
// function startGame(){
// sumEl.textContent = "Sum: " + sum
// if (sum < 21){
//     message="Do you want to draw a new card?"
    
// }
// else if (sum === 21){
//     message = "Woh! You've got Blackjack!"
//     hasBlackJack = true // now value stores there cause this block of code run after 21 === 21
// }
// else {
//     message = "You're out of the game!"
//     isAlive = false // when player is no longer in game and out of game
// }
// }
// // display the message in the messageEL 
// messageEl.textContent = message
// console.log(message)



let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//lets add array
let cards = [firstCard, secondCard]

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum += card
    cards.push(card)
    renderGame()
}

