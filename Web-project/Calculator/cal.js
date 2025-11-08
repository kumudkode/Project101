let num1= 12
let num2= 22
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")
let subEl = document.getElementById("sub-el")
let divEl = document.getElementById("div-el")
let mulEl = document.getElementById("mul-el")

function add() {
    sumEl.textContent = "Sum: "+ (num1 + num2)
}
function sub(){
    subEl.textContent = "Sub: "+ (num1 - num2)
    // subEl.textContent = "Sub: "+ num1 - num2 // NAN 
}
function div(){
    divEl.textContent = (num1 / num2) // 3.2857142857142856
    divEl.textContent = "Div: "+Math.floor(num1 / num2) // 3
    // using math.floor we can round off the value
}
function mul(){
    mulEl.textContent = "Mul: "+ (num1 * num2)
}