// Problem 1 : Given an array find the unique items in the array. 


let arr = ["thor", "hulk", "tony", "wayne", "Beyne", "hulk", "clint", "clint", "wayne"]; 

let obj = {}; 

for(let i=0; i<arr.length; i++){
  obj[arr[i]] = 1; 
} 

console.log(obj); 
