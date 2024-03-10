const myobj = {
    js: "JS",
    cpp: "C++"
};

// for (const key in myobj) {
//     console.log(key);
// }

// for (const key in myobj) {
//     console.log(`${key} => ${myobj[key]}`);
// }

const programming = ['js', 'cpp', 'python'];


for(const key in programming){
    console.log(programming[key]);
}