// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join. 


function dotJoin(arr){
  let str = " "; 
  
  if(str == undefined){ 
    str = arr[0]; 
    for(let i=1; i<arr.length; i++){
      if(i == arr.length-1){
        str += arr[i]; 
      } 
      else{
        str += arr[i]+","; 
      }
    }
  } 
  else if(str == ""){
    for(let i=0; i<arr.length; i++){
      str += arr[i]; 
    }
  } 
  else if(str == "-"){ 
    str = ""; 
    for(let i=0; i<arr.length; i++){
      if(i == arr.length-1){
        str += arr[i]; 
      } 
      else{
        str += arr[i]+"-";
      }
    }
  } 
  else if(str == " "){
    str = ""; 
    for(let i=0; i<arr.length; i++){
      str += arr[i]+" "; 
    }
  }

  return str; 
} 

let ans = dotJoin(["Harry", "Potter", "and", "the", "Order", "of", "Phoenix"]); 

console.log(ans); 
