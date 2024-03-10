const tinderUser = new Object() // Singleton Object
// const tinderUser = {} // Non Singleton Object

tinderUser.id = "123"
tinderUser.name = "Hirdesh"
tinderUser.age = 20

// console.log(tinderUser);

const regularUser = {
    email: "hirdesh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hirdesh",
            lastname: "Khandelwal"
        }
    }
}

// console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    courseName: "JS in Hindi",
    price: "999"
}

const {courseName, price} = course
console.log(courseName, price);

const {courseName: name} = course
console.log(name);