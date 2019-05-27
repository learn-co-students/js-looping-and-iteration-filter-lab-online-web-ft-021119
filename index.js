// Code your solution in this file

function findMatching(drivers, string) {
  let newDrivers = drivers.filter( function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  } );
  return newDrivers;
}

function fuzzyMatch(drivers, letters) {
  let i = letters.length
  let newDrivers = drivers.filter( function(driver){
    return driver.slice(0, i) === letters;
  });
  return newDrivers;
}

function matchName(drivers, string) {
  let newDrivers = drivers.filter( function(driver){
    return driver["name"] === string;
  });
  return newDrivers;
}
