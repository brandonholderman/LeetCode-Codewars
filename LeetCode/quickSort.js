let numbers = [3, 9, 1, 11, 35, 2]

let quickSort = (data) => {
    let greater = []
    let equal = []
    let less = []
    // let pivot = data[0]
    let pivot = data[Math.floor(Math.random() * data.length)]
    console.log('Pivot  --> ', pivot)

    if (data.length <= 1) return data

    for (let i of data) {
        console.log(i)
        if (pivot > i) {
            less.push(i)
        }

        if (pivot < i) {
            greater.push(i)
        }

        if (pivot === i) {
            equal.push(i)
        }
    }
    return quickSort(less) + equal + quickSort(greater)
    // result.push(sorted)
}

console.log(quickSort(numbers))