// Arrays

const myArr = [1, 2, 3, 4, true, "Hello"]
// console.log(myArr[0]);

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("B ", myArr);
console.log(myn2);