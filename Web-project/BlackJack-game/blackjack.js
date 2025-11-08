// BlackJack Game JavaScript Code

let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard

//lets add array
let cards = [firstCard, secondCard]

// Create a new function called startGame() that calls renderGame()
function startGame() {
    if( isAlive = true)
    {
         renderGame()
    }
   
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards
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

function getRandomCard(){
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10){
        return 10
}   else if (randomNumber === 1){
        return 11
}
    else {
        return randomNumber
    }
}
let card = getRandomCard()
function newCard(){
    if (isAlive === true && hasBlackJack === false){
        cards.push(card)
        sum += card
        renderGame()
    }

}
function restart(){
  message =" Play again"
  messageEl.textContent = message
  cardsEl.textContent = "Cards: " 
  sumEl.textContent = "Sum: " 
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards= [firstCard, secondCard]

}

