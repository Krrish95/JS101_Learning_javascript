// Problem 2: Print Prime Numbers from 1 to given limit. 


for(let i=1; i<=100; i++){

  let fact = 0; 

  for(let j=1; j<=i; j++){
    if(i%j==0){
      fact++; 
    }
  } 

  if(fact==2){
    console.log(i); 
  } 
  else{
    continue; 
  }
} 
