// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included) 


function odd(num){

  if(num%2!=0){
    return true; 
  } 
  else{
    return false; 
  }
} 

for(let i=0; i<=20; i++){

  let retn = odd(i); 

  if(retn == true){
    console.log(i); 
  } 
  else{
    continue; 
  }
} 
