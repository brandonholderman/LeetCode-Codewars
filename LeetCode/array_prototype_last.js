/**
 * @return {null|boolean|number|string|Array|Object}
 */
// Array.prototype.last = function () {
//     if (this.length <= 0) return -1
//     return this.map((val) => {
//         console.log(this)
//         if (val === null) return null
//         if (val === undefined) return -1
//         return val
//     }).at(-1)
// };

Array.prototype.last = function () {
    if (this.length <= 0) return -1
    if (this === null) return null
    if (this === undefined) return -1
    return this.at(-1)
};


// const arr = [null, 3, {}];
//  const arr = [1, 2, 3];
//  const arr = [null];
 const arr = [];
 console.log(arr.last()) // 3



//  val).at(-1) ?? null ?? -1