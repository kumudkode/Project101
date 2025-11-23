// High order function return
// let odd = function(n){
//     console.log(!(n%2==0))
// }
// let even = function(n){
//     console.log(n%2==0)
// }
// odd(5) // true
// odd(2) //false
// even(5) //false
// even(2) //true

function oddEvenChecker(request){
    if(request == "odd"){
        let odd = function(n)
    {
    console.log(!(n%2==0))
    }
    return odd;
    }
    else if(request == "even")
    {
        let even = function(n)
        {
            console.log(n%2==0)
        }
        return even;
    }
    else
    {
        console.log("Wrong request")
    }
}
// let request = "odd"
// let func = oddEvenChecker(request)

// console.log(func)
// console.log(request)
// func(3)

let request = "even"
let func = oddEvenChecker(request)

console.log(request)
console.log(func)
func(3)

