const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task is completed...");
        resolve();
    }, 1000)
});

promiseOne.then(function () {
    console.log("Promsise is Consumed...");
});

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task is completed...");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise Consumed...");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task...");
        resolve({ username: "Hirdesh", email: "hirdesh@gmail.com" })
    }, 1000)
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Hirdesh", email: "hirdesh@gmail.com" });
        } else {
            reject("Error: Something went wrong!");
        }
    }, 1000)
});

promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (message) {
    console.log(message);
}).finally(() => console.log("Promise is resolved or rejected..."));

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Hirdesh", email: "hirdesh@gmail.com" });
        } else {
            reject("Error: Something went wrong!");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));