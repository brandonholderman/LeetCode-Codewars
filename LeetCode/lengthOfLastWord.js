/**
* Given a string s consisting of words and spaces, return the length of the last word in the string.
* A word is a maximal consisting of non-space characters only.
 
 * @param {string} s
 * @return {number}
*/
function lengthOfLastWord(s) {
    // console.log(s.trim().split(' ').at(-1))
    return s.trim().split(' ').at(-1).length
};

// console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))