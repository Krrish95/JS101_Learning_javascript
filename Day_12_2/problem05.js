// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"] 


function characterConvert(char){

  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  
  let lower = "abcdefghijklmnopqrstuvwxyz"; 
  
  for(let i=0; i<upper.length; i++){
  
    if(char == upper[i]){
      
      char = lower[i]; 
    }
  } 

  return char; 
}

function stringConvert(str){
  
  let newstr = ""; 
  
  for(let i=0; i<str.length; i++){
  
    let char = characterConvert(str[i]); 
  
    newstr += char; 
  } 

  return newstr; 
}

function convertArray(arr){
  
  let newarr = []; 
  
  for(let i=0; i<arr.length; i++){
  
    let char = arr[i]; 
  
    let div = ""; 
  
    for(let j=0; j<char.length; j++){
  
      let giv = stringConvert(char[j]); 
  
      div += giv; 
    } 
  
    newarr.push(div); 
  } 
  
  return (newarr); 
} 

let ans = convertArray(["MA", "SA", "I", "SCH", "OOL"]); 

console.log(ans); 
