// Problem 1: Find the average of elements present at odd index of the following array. 


let arr = [10, 24, 56, 72, -10, -88, 100, 564]; 

let sum = 0; 

let count = 0; 

arr.forEach(function(element, index){
  if(index%2!=0){
    sum += element; 
    count++; 
  }
}); 

console.log(sum/count); 
