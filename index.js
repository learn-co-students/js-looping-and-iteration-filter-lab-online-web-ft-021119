// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers,string) {
  let result = drivers.filter(function (driver) {return driver.toUpperCase() == string.toUpperCase() })
  return result
}

function fuzzyMatch(drivers, string) {
  let result = drivers.filter(function (driver) {return driver.startsWith(string) })
  return result
}

function matchName(drivers, string) {
  let result = drivers.filter(function (driver) {return driver.name === string })
  return result
}
