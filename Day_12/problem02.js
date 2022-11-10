// Problem 2: Use the above function to print the Primes from 2 to a given limit. 


function primeOrNot(num){
  
  let fact = 0; 
  
  for(let i=1; i<=num; i++){
    if(num%i == 0){
      fact++; 
    }
  } 
  
  if(fact == 2){
    return "Prime"; 
  } 
  else{
    return "Not prime"
  }
} 


for(let i=2; i<=50; i++){

  let ans = primeOrNot(i); 

  if(ans == "Not prime"){
    continue; 
  } 
  else{
    console.log(i); 
    
  }
} 
