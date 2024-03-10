function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("D");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function add(num1, num2){
//     console.log(num1 + num2);
// }

function add(num1, num2){
    return num1 + num2
}

const result = add(2, 4)
console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username...");
        return
    }
    return `${username} just logged in...`
}

// console.log(loginUserMessage());
console.log(loginUserMessage("Hirdesh"));

function calculateCartPrice(...price){
    return price
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "Hirdesh",
    price: 199
}

function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObj(user)