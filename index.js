function findMatching(collection, name) {
   const result = collection.filter(driver => driver.toLowerCase() === name.toLowerCase())

   return result
}

function fuzzyMatch(collection, partial) {
   const result = collection.filter(driver => driver.slice(0, partial.length).toLowerCase() === partial.toLowerCase())

   return result
}

function findNameInHash(hash, nameArg) {
   if (hash[name] === nameArg) {
      return hash
   }
}

function matchName(collection, nameArg) {
   const result = collection.filter(driver => driver['name'].toLowerCase() === nameArg.toLowerCase())
   return result
}