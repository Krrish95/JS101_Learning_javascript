// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions, 1. To find the difference, 2. To find the absolute value. 


function difference(a,b){
  return a-b; 
} 

function absoluteDiff(num){
  return Math.abs(num); 
} 

let step1 = difference(12, 4); 
let step2 = absoluteDiff(step1); 

console.log(step2); 

step1 = difference(4, 18); 
step2 = absoluteDiff(step1); 

console.log(step2); 
