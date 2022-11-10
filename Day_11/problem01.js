// - Given a list of user data with name and age, create a list of key-value pairs from the input.
// - From the generated data, print the users whose age is more than 30. 



let name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]; 
let age = [32, 30, 26, 28, 44]; 

let details = []; 

for(let i=0; i<name.length; i++){

  let obj = {}; 

  obj["name"] = name[i]; 
  obj["age"] = age[i]; 

  details.push(obj); 
} 

// console.log(details); 

for(let i=0; i<details.length; i++){

  if(details[i]["age"] > 30){
    console.log(details[i]["name"]); 
  } 
  else{
    continue; 
  }
}
