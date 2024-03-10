const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`Acc: ${acc} and Curr Value: ${currval}`);
//     return acc + currval
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

// console.log(myTotal);

const shoppingCart = [
    {
        course: "JS",
        price: 2999
    },
    {
        course: "Python",
        price: 999
    },
    {
        course: "Mobile Dev",
        price: 5999
    },
    {
        course: "DS",
        price: 12999
    },
];

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(cartTotal);