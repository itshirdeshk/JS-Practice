// for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for(let index = 0; index < 10; index++){
//     const ele = index;
//     console.log(ele);
// }

// for(let i = 1; i <= 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i}, ${j}`);
//     }
// }

// let myArray = [1, 2, 3]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue

// for (let index = 1; index < 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}