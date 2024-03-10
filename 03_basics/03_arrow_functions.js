const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     const username = "hirdesh";

//     // This will not work here.
//     console.log(this.username);
// }

const chai = () => {
    const username = "hirdesh";

    // This will not work here.
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // Explicit return
// }

// const addTwo = (num1, num2) => (num1 + num2) // Implicit return

const addTwo = (num1, num2) => ({username: "Hirdesh"}) // Implicit return

console.log(addTwo(2, 4));