const user = {
    username: "Hirdesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Got user details from db...');
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

const User = function(username, loginCount){
    this.username = username;
    this.loginCount = loginCount;

    return this
}

const userOne = new User("Hirdesh", 20);
const userTwo = new User("XYZ", 15);

console.log(userOne);
console.log(userTwo);