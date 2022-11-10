// Problem 4
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block 



let convertstr = str =>{
  let newstr = ""; 
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  let lower = "abcdefghijklmnopqrstuvwxyz"; 

  for(let i=0; i<str.length; i++){

    let char = str[i]; 

    for(let j=0; j<upper.length; j++){

      if(char == upper[j]){
        newstr += lower[j]; 
      } 
      else if(char == lower[j]){
        newstr += upper[j]; 
      }
    }
  } 
  return newstr; 
} 

let ans = convertstr("Test"); 

console.log(ans); 
