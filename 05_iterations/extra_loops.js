// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const i of arr) {
//     console.log(i);
// }

// for (const i of "Hello World!"){
//     console.log(`Each char is ${i}`);
// }

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");

console.log(map);

for(const [key, value] of map){
    console.log(key, " => ", value);
}