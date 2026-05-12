function twoSum(nums, target) {
    let numIndex = {}
    let index = 0
    let temp = 0

    while (index < nums.length) {

        temp = target - nums[index]

        if (numIndex.hasOwnProperty(temp)) {
            return [numIndex[temp], index]
        }

        numIndex[nums[index]] = index
        index++
    }
}

console.log(twoSum([2, 7, 11, 15], 9))