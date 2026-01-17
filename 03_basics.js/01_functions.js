function sayMyName() {
console.log("H");
console.log("E");
console.log("I");
console.log("S");
console.log("E");
console.log("N");
console.log("B");
console.log("E");
console.log("R");
console.log("G");
}

// sayMyName()

function twoNumberes(number1, number2) {
    console.log(number1 + number2);
}
twoNumberes(3, 5)

function twoNumberes(number1, number2) {
    const result = number1 + number2
    return result
}
const result = twoNumberes(5, 6)
// console.log("Result:", result );


function loginUserMessage(username){
    if(!username){   // username === undefined
        console.log("Oops! Hold Your Horses");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("John"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
} 
console.log(calculateCartPrice(100, 300, 499, 900));
