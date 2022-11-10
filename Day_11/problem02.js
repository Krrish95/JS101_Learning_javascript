// Given an object of student grades and their marks in the mentioned below format. 
// Print the highest scored student for each grade along with the total. 


let details = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]; 

for(let i=0; i<details.length; i++){

  let max = -Infinity; 

  let student; 

  let grade; 
  
  for(let j=0; j<details[i]["students"].length; j++){

    let sum = 0; 
    
    for(let l=0; l<details[i]["students"][j]["marks"].length; l++){

      sum += details[i]["students"][j]["marks"][l]; 
    } 

    if(sum > max){
      max = sum; 
      student = details[i]["students"][j]["name"]; 
      grade = details[i]["grade"]; 
    }
  } 

  console.log(grade + "-" + student + "-" + max); 
} 
