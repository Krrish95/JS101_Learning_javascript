// Problem 4 : Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols ).

let name = "Mr. S.Krishna Chaitanya";  
let sch = "Narayana Jr. College"; 
let grd = "7.7"; 
let sec = "B"; 
let roll = 3493714020; 
let math = "89"; 
let phy = "76"; 
let chem = "90"; 

console.log("       Report Card     "); 
console.log("Name    : " + name + "\n" + "School  : " + sch); 
console.log("Roll No : " + roll + "           " + "Section : " + sec); 
console.log("Marks   :"); 
console.log("----------------------------------------------"); 
console.log("   Maths" + "    |    " + "Physics" + "    |    " + "chemistry"); 
console.log("    " + math + "      |      " + phy + "       |       " + chem); 
console.log("----------------------------------------------"); 
console.log("Final Grade : " + grd); 
