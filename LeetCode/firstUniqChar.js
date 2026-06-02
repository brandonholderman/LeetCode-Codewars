/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

TODO: // Implement MinHeap method for increased performance. Formula is (index - 1) / 2. This returns the root or the "least" value.
// let parent = Math.floor((i - 1) / 2)
// let leftChild = 2 * i + 1
// let rightChild = 2 * i + 2


function MinHeap() {
    let heap = []

    function getParent(i) {
        return Math.floor((i - 1) / 2)
    }

    function getLeft(i) {
        return ((i * 2) + 1)
    }

    function getRight(i) {
        return ((i * 2) + 2)
    }

    function swap(parentIndex, index) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]]
    }

    function insert(val) {
        heap.push(val)
        bubbleUp()
        console.log(heap)
    }

    function extractMin() {
        if (heap.length === 0) return null
        if (heap.length === 1) return heap.pop()
        let min = heap[0]

        heap[0] = heap.pop()
        bubbleDown()

        console.log('Tree after min extraction', heap)
        return min
    }

    function bubbleUp() {
        let index = heap.length - 1

        while (index > 0) {
            let parentindex = getParent(index)
            if (heap[parentindex] > heap[index]) {
                swap(parentindex, index)
                index = parentindex
            } else {
                break
            }
        }
    }

    function bubbleDown() {
        let index = 0

        while (getLeft(index) <= (heap.length - 1)) {
            let left = getLeft(index)
            let right = getRight(index)
            let minValueIndex = left


            if (right <= heap.length - 1 && heap[right] < heap[left]) {
                minValueIndex = right
            }

            if (heap[index] > heap[minValueIndex]) {
                swap(index, minValueIndex)
                index = minValueIndex
            } else {
                break
            }
        }
    }

    console.log({ extractMin })
    return { insert, extractMin }
}


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