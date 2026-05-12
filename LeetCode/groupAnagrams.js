let numbers = [3, 9, 1, 11, 35, 2]

let quickSort = (data) => {
    let greater = []
    let equal = []
    let less = []
    let temp = data[0]
    
    if (data.length <= 1) {
        return data
    }
    
    for (let i of data) {
        if (temp > i) {
            less.push(i)
        }

        if (temp < i) {
            greater.push(i)
        }

        if (temp === i) {
            equal.push(i)
        }
    }
    return quickSort(less) + equal + quickSort(greater)
    // result.push(sorted)
}

// console.log(quickSort(numbers))


let groupAnagrams = (strs) => {
    let result = {}
    let counter = 0
    let letterKey = ''
    let finalResult = []

    for (let i of strs) {
        // letterKey = i.split('').sort().join('')
        // letterKey = i.split('').sort()
        // console.log(letterKey)

        // Eliminate the sort method. Create empty array, count the letters.
        // See back to Caesers Cipher. Any word that produces that array will be combined.

        // letterKey = [...i].sort()

        // console.log([...i].sort())
        // console.log(i.split(''))

        if (i.length < 3) {
            continue
        }

        letterKey = quickSort([...i])

        if (result[letterKey] === undefined) {
            result[letterKey] = []
            // counter++
        }

        result[letterKey].push(i)
    }


    for (let k in Object.keys(result)) {
        finalResult.push(result[Object.keys(result)[k]])
    }

    return finalResult
};

// console.log(groupAnagrams(["eat", "tea", "tan", "at", "ate", "nat", "bat"]))



function groupAnagramsCount(strs) {
    let result = {}
    let letterKey = ''
    
    
    for (let i of strs) {
        if (i.length < 3) {
            continue
        }
        if (result[letterKey] === undefined) {
            result[letterKey] = []
        }
        // letterKey += i
        result[letterKey].push(i)
    }
    
    for (let k of letterKey) {
        alphabetIndex = alphabet.indexOf(k.toLowerCase())
        // result[k] = (result[k] || 0) + 1
        alphabetIndex += 1
        console.log(alphabetIndex)
    }
    return result
    /*
    // If statement that lives in second for loop and returns an object with the count of each letter. { e: 3, a: 6, t: 6, n: 2, b: 1 }
    if (result[k]) {
        result[k] += 1
        } else {
            result[k] = 1
    }
    */
   
   // for (let [...val] of alphabet) {
    // console.log(val)
    //     return result[val] = val
    // } 
    
    // function addValue(key) {
        //     if (result[key]) {
            //         result[key] += 1
            //     } else {
                //         result[key] = 1
                //     }
                // }
                
            }
            
            // { e: 3, a: 6, t: 6, n: 2, b: 1 }
            // console.log(groupAnagramsCount(["eat", "tea", "tan", "at", "ate", "nat", "bat"]))
            // console.log(scoreWords(["eat", "tea", "tan", "at", "ate", "nat", "bat"]))


/*
Solution Below
*/
            
const alphabet = "abcdefghijklmnopqrstuvwxyz";
            
function myGroupAnagrams(strs) {
    let result = {}
    let wordIndex = 0
    let letterIndex = 0
    let indexScore = 0
    let wordKey = ''
    let finalResult = [] 

    while (wordIndex < strs.length) {
        let str = strs[wordIndex]

        if (letterIndex < str.length) {
            let letter = str[letterIndex].toLowerCase()
            let alphabetIndex = alphabet.indexOf(letter)

            if (alphabetIndex !== -1) {
                indexScore += alphabetIndex + 1
            }

            wordKey += letter
            letterIndex++
        } else {
            result[wordKey] = indexScore
            // result[indexScore] = wordKey

            wordKey = ''
            indexScore = 0
            letterIndex = 0
            wordIndex++
        }
    }
    result = result

    for (let word in result) {
        let value = result[word]

        if (finalResult[value] === undefined) {
            finalResult[value] = []
        }

        finalResult[value].push(word)
    }

    return Object.values(finalResult)
}

// console.log(myGroupAnagrams(["eat", "tea", "tan", "at", "ate", "nat", "bat"]))

function submittedGroupAnagrams(strs) {
    let word = ''
    let result = {}
    let finalResult = []

    for (let i of strs) {
        word = [...i].sort()

        if (result[word] === undefined) {
            result[word] = []
        }

        result[word].push(i)
    }

    for (let k in Object.keys(result)) {
        finalResult.push(result[Object.keys(result)[k]])
    }

    return finalResult
}

console.log(myGroupAnagrams(["eat", "tea", "tan", "at", "ate", "nat", "bat"]))