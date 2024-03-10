const coding = ['js', 'cpp', 'python', 'dart'];

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item)=> console.log(item));

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language: "Javascript",
        fileName: "js"
    },
    {
        language: "Java",
        fileName: "java"
    },
    {
        language: "Python",
        fileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.language);
    console.log(item.fileName);
})