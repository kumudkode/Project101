// create a function that returns the sum of number from 1 to n
function sum(n){
    return n*(n+1)/2
}
console.log(sum(3)) 

// or 
function getSum(m){
let sum = 0;
for(let i = 0;i<=m;i++){
    sum += i;
    console.log(i +" "+m+" = "+ sum)
}
return sum
}
console.log(getSum(3))

//or we can use return direct value of function
function isAdult(age){
if(age>=18){
    return "adult";
}
else
{
    return "not adult";
}
}
console.log(isAdult(23))