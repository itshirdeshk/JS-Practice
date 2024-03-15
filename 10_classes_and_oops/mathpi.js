const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    status: function () {
        log("Chai nhi bani...");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function')
        console.log(`${key}: ${value}`);
}

Object.defineProperty(chai, 'name', {
    enumerable: false,
});

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function')
        console.log(`${key}: ${value}`);
}