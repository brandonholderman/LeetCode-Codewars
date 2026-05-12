/*
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

    MyHashMap() initializes the object with an empty map.
    void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
    int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
    void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
*/

let MyHashMap = function () {
    this.newMap = {}
    // return {
    //     put(key, value) {return newMap[key] = value},
    //     get(key) {},
    //     remove(key) {},
    // }
};

/** 
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    if(key.constructor === Array) {
        // value = key[1]
        // key = key[0]
        [key, value] = key
    }
    return this.newMap[key] = value 
};

/** 
 * @param {number} key
 * @return {number}
*/
MyHashMap.prototype.get = function (key) {
    // console.log(!this.newMap[key] === 0)
    // console.log(this.newMap[key])
    if(this.newMap[key] === 0) return this.newMap[key]
    if (!this.newMap[key]) return -1
    return this.newMap[key]
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    if (!this.newMap[key]) return -1
    return delete this.newMap[key]
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

let obj = new MyHashMap()
// console.log(obj)

// console.log(obj.put('name', 'b-money'))
// console.log(obj.get('name'))

console.log(obj.put([11, 0]))
console.log(obj.get([11]))

// console.log(obj.put([2, 2]))
// console.log(obj.get([2]))

console.log(obj)

// console.log(MyHashMap.get('Hello'))