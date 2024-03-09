let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueTONumber = Number(score);
console.log(valueTONumber);
console.log(typeof valueTONumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn);

// 1 => true; 0 => false;
// "hirdesh" => true; "" => false