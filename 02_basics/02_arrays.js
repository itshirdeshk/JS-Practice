const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// arr1.push(arr2)
// console.log(arr1);

const arr3 = arr1.concat(arr2)
// console.log(arr3);

const arr4 = [...arr1, ...arr2] // Spread Operator
// console.log(arr4);

const another_array = [1, 2, [3, 4, 5], 6, 7, [8, [9]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Hirdesh"));
console.log(Array.from("Hirdesh"));

// An Interesting case because we have to specify that from keys or values, we want to make array.
console.log(Array.from({name: "Hirdesh"}));

let score1 = 100
let score2 = 200
let score3 = 300

const score_array = Array.of(score1, score2, score3)
console.log(score_array);