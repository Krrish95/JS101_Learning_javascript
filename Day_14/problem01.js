// Problem 1 :
// Create an object with the following functionality
// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total. 


let details = {

  data : [], 
  addStudent : function(name, math, phy, chem){
    let obj = {}; 
    obj["Name"] = name; 
    obj["Mathametics"] = math; 
    obj["Physics"] = phy; 
    obj["Chemistry"] = chem; 

    this.data.push(obj); 
  }, 
  leastTotal : function(){
    let min = Infinity; 
    let student; 

    for(let i=0; i<this.data.length; i++){

      let total = this.data[i].Mathametics + this.data[i].Physics + this.data[i].Chemistry; 

      if(total<min){
        min = total; 
        student = this.data[i].Name; 
      }
    } 

    console.log(student + " with " + min); 
  }, 
  highestTotal : function(){
    let max = -Infinity; 
    let student; 

    for(let i=0; i<this.data.length; i++){

      let total = this.data[i].Mathametics + this.data[i].Physics + this.data[i].Chemistry; 

      if(total>max){
        max = total; 
        student = this.data[i].Name; 
      }
    } 

    console.log(student + " with " + max); 
  }, 
} 

details.addStudent("Shudam", 10, 20, 30); 
details.addStudent("Rahul", 15, 25, 35); 
details.addStudent("Rohit", 20, 30, 40); 

console.log(details.data); 
details.leastTotal(); 
details.highestTotal(); 
