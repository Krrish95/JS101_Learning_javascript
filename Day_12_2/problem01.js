// Write a function named addNumbers which takes two numbers as input and return their sum. 
// Use the function to calculate the sum of given three numbers. 


function addNumber(a,b){
  return a+b; 
} 

let x = 2; 
let y = 5; 
let z = 7; 

let sum = addNumber(x,y); 
let ans = addNumber(sum, z); 

console.log(ans); 
