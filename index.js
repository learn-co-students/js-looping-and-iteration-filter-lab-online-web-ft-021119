function findMatching(drivers, name) {
    //let matches = [];
   // matches.push
    return drivers.filter(function (driver) {return driver.toLowerCase() == name.toLowerCase();});
    //return matches
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {return driver.startsWith(letters)} );
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {return driver.name === name})
}