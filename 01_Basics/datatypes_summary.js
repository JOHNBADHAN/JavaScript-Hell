//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.8
const isLoggedIn = false
const temperature = null
let UserId
const Id = Symbol('12345')
const Id2 = Symbol('12345')
// const bigNumber = 3456543576654356754n

console.log(Id === Id2);


// Reference (Non primitive)

// Array, Objects, Functions

let SuperHeroes = ["Iron-Man", "Captain America", "SpiderMan"]

let myobj = {
    name: "John",
    age: 20,
}

const myFunction = function(){
    console.log("Strength And Honor");
}

console.log(typeof anotherId);
console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);