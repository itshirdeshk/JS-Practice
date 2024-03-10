// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log("Chai Connected...");
})();

(() => {
    // Unnamed IIFE
    console.log("Chai again Connected...");
})();

((name) => {
    console.log(`Chai again Connected... ${name}`);
})('Hirdesh');