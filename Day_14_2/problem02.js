// Problem 2 :
// Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price) 


let bill = {
  data : [], 
  addItems : function(item, quan, price){
    
    for(let i=0; i<item.length; i++){
      
      let obj = {}; 
      
      obj["Name"] = item[i]; 
      obj["Quantity"] = quan[i]; 
      obj["Price"] = price[i]; 

      this.data.push(obj); 
    } 
  }, 
  total : function(){

    let sum = 0; 

    for(let i=0; i<this.data.length; i++){

      sum += (this.data[i].Quantity * this.data[i].Price); 
    } 

    console.log(sum); 
  }
} 

bill.addItems(["Rice", "Dal", "Salt"], [2, 3, 1], [60, 50, 20])
console.log(bill.data); 
bill.total(); 
