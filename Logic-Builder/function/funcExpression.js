// const variable = function(arg1,arg2..){

// }
// When we store any function inside variable and we called such function as nameless function

let sum = function(a,b){
    return a+b
}

sum(2,3) 
console.log(sum(5,2))

let hello = function(){
    console.log("hello")
}
hello()

let mult = function(a,b){
    mult=a*b
    console.log(mult)
    return mult
}
mult(3,3)