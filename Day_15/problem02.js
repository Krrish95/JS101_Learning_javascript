// Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5. 


let arr = [2, 3, 4, 6, 7]; 

let newarr = arr.map(function(element, index){
  return element**5; 
}); 

console.log(newarr); 
