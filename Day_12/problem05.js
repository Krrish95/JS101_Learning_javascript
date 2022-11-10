// Problem 5: Write a function to replace spaces in a given string with - . 


function replaceSpace(str){
  
  let newStr = ""; 
  
  for(let i=0; i<str.length; i++){
  
    if(str[i] == " "){
      newStr += "-"; 
    } 
    else{
      newStr += str[i]; 
    }
  } 
  
  return (newStr); 
} 

let ans = replaceSpace("Harry Potter and the Order of the Phoenix"); 

console.log(ans); 
