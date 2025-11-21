// Scope determines the accessibility of variables,objects, and function from different parts
// We have to 3 types of Scope functions level, block level and lexical scope and one main scope is Global scope

// global scope and function scope
let sum = 54; //global scope

function calcSum(){
    console.log(sum) // accessing global sum
}

function calcSum(){
    let sum = 23; // function scope
    console.log(sum) // accessing functional sum
}
calcSum()

// { } block scope 
{
    let b = 34;
}
// console.log(b) 
// error ReferenceError: b is not defined

for(let i=0;i<=5;i++){ 
    // {} block scope 
    console.log(i)

}
// console.log(i) ReferenceError: i is not defined

// Lexical Scope
// a variable defined outside a function can be accessible inside another function defined after the variable declaration

function scope(){
    let a = 10
    console.log(a)
    // console.log(b)
    // ReferenceError: b is not defined
    function scope2(){ // lexical scope
        let b = 20
        console.log(a)
        console.log(b)
    }
}

scope()