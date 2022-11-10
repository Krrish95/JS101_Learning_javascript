// Problem 5. Write a custom function that has the same behavior of inbuilt Array Includes Function. 


function dotIncludes(arr, ele){
  
  let present = false; 
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] == ele){
      present = true; 
    } 
    else{
      continue; 
    }
  } 
  
  return (present); 
} 

let ans = dotIncludes(["Harry", "Potter", "and", "the", "Order", "of", "Phoenix"], "of"); 

console.log(ans); 
