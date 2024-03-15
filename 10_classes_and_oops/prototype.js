// const myChai = "Chai   ";
// console.log(myChai.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hirdesh = function () {
    console.log(`Hirdesh is present in all objects...`);
};

Array.prototype.heyHirdesh = function () {
    console.log(`Hy Hirdesh...`);
}

heroPower.hirdesh();
myHeros.heyHirdesh();


const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();