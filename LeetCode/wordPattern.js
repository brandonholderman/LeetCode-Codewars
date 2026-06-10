/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const result = {}

    let stringArray = s.split(' ')
    let hashMap = pattern.split('').map((key, index) => ({ [key]: stringArray[index] })) // <-- Why are the additional parens needed around the return?
    // let hashMap = pattern.split('').reduce((key, index) => ({ [key]: stringArray[index]})) // <-- Why are the additional parens needed around the return?

    console.log(hashMap)
    // How do I compare the return values?
    // for (let i of hashMap) {
    //     console.log(i)
    // }


    // create second object for comparison reversed. 
    for (let i = 0; i < pattern.length; i++) {
        const existingVal = result[pattern[i]]
        
        if (existingVal) {
            if(existingVal !== stringArray[i]) {
                return false
            }
        }   
        result[pattern[i]] = stringArray[i]
    }
    return true
};

// console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat cat'))