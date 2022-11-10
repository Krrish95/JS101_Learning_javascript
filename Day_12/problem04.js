// Problem 4: Write a function to check if the char is a small case or not. 


function checkSmallCase(char){ 
  
  let lower = "abcdefghijklmnopqrstuvwxyz"; 
  
  for(let i=0; i<lower.length; i++){
  
    if(char == lower[i]){
      return  "is in lower case"; 
      break; 
    } 
    else{
      continue; 
    }
  } 
} 

let ans = checkSmallCase("m"); 

console.log(ans); 