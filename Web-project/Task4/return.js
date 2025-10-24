let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
       // return player1Time 
        console.log(player1Time)
    } else if (player2Time < player1Time) {
        //return player2Time 
        console.log(player2Time)
    } else {
        //return player1Time 
        console.log(player1Time)
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)
// now value  of fastestRace is undefined because function didn't return anything if we want to store the value in variable we need to return the value from function

// Write a function that returns the total race time
function totalRaceTime(){
    return player1Time + player2Time
}
let total =  totalRaceTime()
console.log(total)
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out



