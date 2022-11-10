// Problem 2. Write a custom function that has the same behavior of inbuilt Array Last Index Of Function. 


function lastIndex(arr, ele){

  let index = -1; 
  for(let i=arr.length-1; i>=0; i--){
    
    if(arr[i] == ele){
      
      index = i; 
      break; 
    }
  } 
  
  return index; 
} 

let ans = lastIndex(['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Dodo'], "the"); 

console.log(ans); 
