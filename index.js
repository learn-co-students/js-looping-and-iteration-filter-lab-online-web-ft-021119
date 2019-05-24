// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers,string) {
  const collection = []
  for (const driver of drivers) {
    if (driver.toLowerCase() === string.toLowerCase()) {
      collection.push(console.log(driver));
    }
  }
  return collection
}
