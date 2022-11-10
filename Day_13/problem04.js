// Problem 4. Write a custom function that has the same behavior of inbuilt String Substring Function. 


function dotSubString(str, N){
  
  let newstr = ""; 
  
  for(let i=N; i<str.length; i++){
  
    newstr += (str[i]); 
  } 
  
  return (newstr); 
} 

let ans = dotSubString("Mozilla", 2); 

console.log(ans); 
