// Code your solution in this file
 function findMatching(driver, name){
 const newDriversArray = [];
 
 for(const driverName of driver){

 	if (driverName.toLowerCase()  === name.toLowerCase()) { 		
 		 newDriversArray.push(driverName); 	
 }
}
return newDriversArray;
}
function fuzzyMatch(drivers, firstTwoLetters){
return drivers.filter(function(el) {
      return el.charAt(0).toLowerCase() === firstTwoLetters.charAt(0).toLowerCase();
  })
}
 function matchName(driver, name){
const newDriversArray = [];

 for(const firstName of driver){

 	if (firstName.name === name) {
 		
 		 newDriversArray.push(firstName);
 }
 }
return newDriversArray;

 }
