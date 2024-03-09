// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 5);
// let myCreatedDate = new Date(2023, 0, 5, 15, 6);
// let myCreatedDate = new Date("01-14-2024");
let myCreatedDate = new Date("2024-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
newDate.toLocaleString('default', {
    weekday: "long",
})