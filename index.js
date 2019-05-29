// Code your solution in this file
function findMatching(collection, name) {
  const result = collection.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return result
}

function fuzzyMatch(collection, string) {
  const result = collection.filter(driver => driver.startsWith(string));
  return result
}

function matchName(collection, string) {
  const result = collection.filter(driver => driver['name'] === string);
  return result
}
