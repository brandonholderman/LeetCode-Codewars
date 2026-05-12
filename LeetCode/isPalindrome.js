/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    let num = `${x}`
    let result = false
    let decre = -1
    let incre = 0
    
    for (let i of num) {
        let odd = Math.floor((num.length - 1) / 2)
        // let even = Math.floor(num.length / 2)
                
        if (num.at(incre) === num.at(decre)) {
            console.log('Continuing check')
        } else {
            console.log('Not Palindrome')
            return result = false
        }
            
        if (num.at(incre) || num.at(decre) === odd) {
            result = true
        }
        decre--
        incre++
    }

    return result
};


// console.log(isPalindrome(122334433221))
console.log(isPalindrome(12233837943221))