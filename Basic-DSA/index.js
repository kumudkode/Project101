/*
Challenge:
**********

Analyze the time complexity of the following 4 functions. For each function, just write down its time complexity in terms of Big O notation. In other words, answer the question: Is it an O(n), O(n^2), or O(1) algorithm?

*/

function sum(n) {
    let sum = 0
    for (let num = 1; num <= n; num++) {
        sum += num
    }
    return sum
}
// Time complexity:
sum(1) // and it is O(n) because of single loop that runs n times

function printMultiplicationTable(n) {
    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            console.log(`${a} x ${b} = ${a * b}`)
        }
    }
}
// Time complexity:
printMultiplicationTable(10) //and it is O(n^2) cause of nested loops that run n times each

function isPositive(n) {
    return n > 0
}
// Time complexity:


function printTriangle() {
    for (let row = 1; row <= 5; row++) {
        let line = ""
        for (let col = 1; col <= row; col++) {
            line = line + "*"
        }
        console.log(line)
    }
}
// Time complexity: 


// console.log(sum(100))
// printMultiplicationTable(10)
// console.log(isPositive(100))
printTriangle()


// time complexity is chij se decide hota hai ki kitni baar loop chalega
// O(1) - constant time complexity
// O(n) - linear time complexity
// O(n^2) - quadratic time complexity
// O(log n) - logarithmic time complexity
// O(n log n) - linearithmic time complexity
// O(2^n) - exponential time complexity
// O(n!) - factorial time complexity
// lekin ye sabhi time complexity hum tabhi dekhte hai jab input size bahut bada ho jata hai
// jaise ki 10^6 ya 10^9
// chhote input size ke liye hum time complexity ko itna importance nahi dete hai