// Object Methods Quick Reference 

// The Golden Rule: Use "Dot" notation for convenience when you know the key, and
// "Bracket" notation whenever the key is stored in a variable or computed on the fly.

// Create an Object
let obj = { 
    key: value
}


// Read known key (Dot Notation)
obj.key


// Read dynamic key
obj[variable]


// Add/Update known key
obj.key = newValue


// Add/Update dynamic key
obj[variable] = newValue


// Delete kay
delete obj.key || obj[key]


// Loop all keys
for (let i in obj) { }
