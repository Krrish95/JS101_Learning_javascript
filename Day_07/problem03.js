// Problem 3 : Given an array of numbers find the average of all the even numbers.


let num = [5, 12, 23, 78, 44, 32, 67, 48, 55, 6]; 

let sum = 0; 
let count = 0; 

for(let i=0; i<num.length; i++){
  if(num[i]%2==0){
    sum += num[i]; 
    count++; 
  }
} 

console.log(sum/count); 