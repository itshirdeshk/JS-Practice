let a = 100

if(true){
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("Inner: ", a);
}

// console.log(a);
// // console.log(b);
// console.log(c);

// Window and Node scope are different

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website);
    two()
}

one()



// +++++++++++++++++ Interesting ++++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num + 1
}

// addOne(5)

console.log(addTwo(5)``);
const addTwo = function(num){
    return num + 2
}
