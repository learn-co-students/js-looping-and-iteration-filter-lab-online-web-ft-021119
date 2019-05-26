// Code your solution in this file
function findMatching(array, string) {
  let matches = (array.filter(function(name) {return name === string || name === string.toLowerCase()}));

  return matches;
}

function fuzzyMatch(array, string) {
  let fuzzyMatches = (array.filter(function(name) {return name.startsWith(string)}));

  return fuzzyMatches;
}

function matchName(array, string) {
  let nameMatches = (array.filter(function(driver) {return driver.name === string}));

  return nameMatches;
}
