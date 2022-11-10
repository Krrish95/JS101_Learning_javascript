// Problem 3
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"] 



let convertchar = char => {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  let lower = "abcdefghijklmnopqrstuvwxyz"; 

  for(let i=0; i<upper.length; i++){ 
    if(char == upper[i]){
      char = lower[i]; 
    }
  } 
  return char; 
}; 

let convertstr = str => {
  let newstr = ""; 
  for(let i=0; i<str.length; i++){
    newstr += convertchar(str[i]); 
  } 
  return newstr; 
}; 

let convertarr = arr => {
  let newarr = []; 
  for(let i=0; i<arr.length; i++){
    newarr.push(convertstr(arr[i])); 
  }
  return newarr
}; 

let ans = convertarr(["MA", "SA", "I", "SCH", "OOL"]); 

console.log(ans); 
