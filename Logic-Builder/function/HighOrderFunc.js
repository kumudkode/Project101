// High order functions are those types of function when we put function as an arguments 

function multipleGreet(funct, n){
    for(let i =1; i<=n;i++){
        funct();
    }
}
let greet = function(){
    console.log("hello")
} 
multipleGreet(greet,1)

let sum = function(){
    console.log(5+4)
}
multipleGreet(sum,2) // printing sum function and how many times it will print 
// here sum function will print 2 times 
// multipleGreet(sum(),3) // do not use () as function() just type function name