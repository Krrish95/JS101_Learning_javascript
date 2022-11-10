// Problem 3. Write a custom function that has the same behavior of inbuilt Array Slice Function. 


function dotSlice(arr){
  let x = 2; 
  let y = -1; 
  let newarr = []; 

  if(x>0 && !y){
    for(let i=x; i<arr.length; i++){
      newarr.push(arr[i]); 
    }
  } 
  else if(x>0 && y>0){
    for(let i=x; i<y; i++){
      newarr.push(arr[i]); 
    }
  } 
  else if(x<0 && !y){ 
    for(let i=arr.length+x; i<arr.length; i++){
      newarr.push(arr[i]); 
    }
  } 
  else if(!x && !y){
    for(let i=0; i<arr.length; i++){
      newarr.push(arr[i]); 
    }
  } 
  else if(x>0 && y<0){
    for(let i=x; i<arr.length+y; i++){
      newarr.push(arr[i]); 
    }
  }
  return newarr; 
} 

let ans = dotSlice(['ant', 'bison', 'camel', 'duck', 'elephant']); 

console.log(ans); 
