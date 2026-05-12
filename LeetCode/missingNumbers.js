/**
 * @param {number[]} nums
 * @return {number}
 */

function missingNumber(nums) {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let size = nums.length
    let sorted = nums.sort()
    let subtract = numArray.length - size
    let start = sorted[0]
    let startIndex = numArray.indexOf(start)
    let compare = numArray.slice(startIndex, start + size)

    console.log('Starting Index ', startIndex)
    console.log('Subtracted ', subtract)
    console.log('Sorted array ', sorted)
    console.log('Compare Array ', compare)

    if (compare.length < 3) return numArray.indexOf(sorted + 1)
    // if (compare.length < 3) return compare[startIndex + 1]
    
    if (sorted !== compare) return compare[size - 1]
}

console.log(missingNumber([0, 1]))
// console.log(missingNumber([1, 2]))
// console.log(missingNumber([0, 3, 1]))
// console.log(missingNumber([0, 3, 2]))
// console.log(missingNumber([6, 9, 7]))
// console.log(missingNumber([6, 4, 7]))
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))