// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block 


function convertCase(str){
  
  let lower = "abcdefghijklmnopqrstuvwxyz"; 
  
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  
  let newstr = ""; 
  
  for(let i=0; i<str.length; i++){
  
    let char = str[i]; 
  
    for(let j=0; j<lower.length; j++){
  
      if(char == lower[j]){
  
        newstr += upper[j]; 
      } 
      else if(char == upper[j]){
  
        newstr += lower[j]; 
      }
    }
  } 
  
  return (newstr); 
} 

let ans = convertCase("Test"); 

console.log(ans); 
