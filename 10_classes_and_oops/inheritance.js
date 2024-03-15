class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@gm.com", "123");

console.log(chai.addCourse());

console.log(chai instanceof Teacher);
console.log(chai instanceof User);