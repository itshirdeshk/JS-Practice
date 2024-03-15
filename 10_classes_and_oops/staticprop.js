class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createdId(){
        return `${123}`;
    }
}

const chai = new User("chai");
console.log(chai.createdId());