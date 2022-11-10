// Problem 1: Create a function to check if a number is Prime or Not.


function primeOrNot(num){
  
  let fact = 0; 
  
  for(let i=1; i<=num; i++){
    if(num%i == 0){
      fact++; 
    }
  } 
  
  if(fact == 2){
    return "Prime"; 
  } 
  else{
    return "Not Prime"; 
  }
} 

let ans = primeOrNot(23); 

console.log(ans); 
