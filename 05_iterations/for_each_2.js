const coding = ['js', 'cpp', 'python', 'dart'];

// forEach loop doesn't return anything.
// const values = coding.forEach((item) =>{
//     return item;
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {
//     return num > 4;
// })

const newNums = []
myNums.forEach((num) => {
    if(num > 4) newNums.push(num);
});

console.log(newNums);