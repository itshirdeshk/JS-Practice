// Singleton
// When we create object from constructor then it is singleton.
// Object.create() 

// Object Literals
// But when we create object from literals then it is not singleton.

const mySym = Symbol("key1")

const jsUser = {
    name: "Hirdesh",
    "full name": "Hirdesh khandelwal",
    age: 20,
    location: "Agra",
    [mySym]: "mykey1"
};

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

jsUser.location = "Bareilly"
// console.log(jsUser);

jsUser.greting = function(){
    console.log("Hello JS User");
}

jsUser.gretingTwo = function(){
    console.log(`Hello ${this.name}, Good Morning...`);
    console.log(`Hello ${jsUser.name}, Good Morning...`);
}


console.log(jsUser.greting());
console.log(jsUser.gretingTwo());

jsUser.email = "hirdesh@google.com"
console.log(jsUser);