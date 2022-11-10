// Problem 2
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average 


let aver = (arr, n) => {

  let sum = 0; 

  arr.forEach(function(element, index){
    sum += element; 
  }) 

  return (sum/n); 
} 

let ans = aver([1,2,3,4,5], 5); 

console.log(ans); 
