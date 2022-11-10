// Problem 1
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included). 


let checkOdd = num => {
  return num%2!=0 ? true : false; 
} 

let n = 10; 

for(let i=0; i<=n; i++){

  let check = checkOdd(i); 

  check == true ? console.log(i) : ""; 
} 

