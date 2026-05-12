/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function (s) {
    let result = {}
    let currIndex = 0

    if(!s) return -1 // Returns -1 if no input is found. 

    while (currIndex < s.length) { // Iterating through the length of the word while the index counter is less than
        let letter = s[currIndex] // Simplifying the reference to the individual letter 
        let count = result[letter] > 0 ? result[letter]++ : result[letter] = 1 // If the value at that key (evaluated letter) is more than 0 Increment that value by 1 or assign 1 as the value
        currIndex++ // Increment current index to continue iterating through the string.
    }
    
    result = result // setting the result in order to iterate through the completed hashmap. 
    console.log(result)
    // return result // returning the hashmap result

    for (let index in s) { // Iterate through string again
        let letter = s[index] // Simplofy reference to letter
        if (result[letter] === 1) return Number(index) // Checks if the current value is equal to 1 and returns the index converted to an integer. 
    }

    return -1 // Fallback return -1 if no unique characters are found. 

    // I want to iterate through my string a second time comparing against keys in 
    // the result hash table and raturn the index of the first letter that contains
    // 1 as the value. 
};


// console.log(firstUniqChar("leetcode"))
// console.log(firstUniqChar("loveleetcode"))
// console.log(firstUniqChar("aabb")) 
console.log(firstUniqChar())
















        // if (result[letter] > 0) { // If the value at that key (evaluated letter) is more than 0 
        //     result[letter]++ // Increment that value by 1
        // } else {
        //     result[letter] = 1 // Otherwise assign 1 as the value
        // }