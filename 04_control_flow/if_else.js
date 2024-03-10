// If

// if(condition) {

// }

// if(1 == 1){
//     console.log("Execeuted...");
// }

// Comparision Operators
// <, >, <=, >=, ==, ===, !=, !==

// const temp = 40;
// if(temp < 50){
//     console.log("Temp is less than 50");
// } else {
//     console.log("Temp is greater than 50");
// }

const balance = 500;

// if(balance == 500) console.log("Balance is 500");
// if(balance == 500) console.log("Balance is 500"), console.log("Balance");

if(balance < 500){
    console.log("Balance is less than 500");
} else if(balance < 750){
    console.log("Balance is less than 750");
} else{
    console.log("Balance is less than 1000");
}


const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow for Shopping");
}

const loginFromGoogle = false
const loginFromEmail = true

if(loginFromGoogle || loginFromEmail) console.log("User Logged in");

