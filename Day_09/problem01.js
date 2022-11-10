// Problem 1: Print the Calendar. 


let days = 31; 

for(let i=1; i<=12; i++){
 
  if(i==2){
    days = 28; 
  } 
  else if(i==4 || i==6 || i==9 || i==11){
    days = 30; 
  } 
  else{
    days = 31; 
  }

  switch(i){
    case 1 : console.log("January"); 
         break; 
    case 2 : console.log("February"); 
         break; 
    case 3 : console.log("March"); 
         break; 
    case 4 : console.log("Aparil"); 
         break; 
    case 5 : console.log("May"); 
         break; 
    case 6 : console.log("June"); 
         break; 
    case 7 : console.log("July"); 
         break; 
    case 8 : console.log("August"); 
         break; 
    case 9 : console.log("September"); 
         break; 
    case 10 : console.log("october"); 
         break; 
    case 11 : console.log("November"); 
         break; 
    case 12 : console.log("December"); 
  }
  
  for(let j=1; j<=days; j++){
    console.log(j + "-" + i);
  } 
} 
