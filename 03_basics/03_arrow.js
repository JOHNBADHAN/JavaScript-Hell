const user = {
    username: "John",
    Age: 20,

    message: function () {
        console.log(`${this.username} , Welcome`);
        console.log(this);

    }
}

// user.message()
// user.username = "Max"
// user.message()
// console.log(this);

function chai() {
    const username = "John"
    console.log(this.username);
}
// chai()

// const myFunction = function chai(){
//     const username = "John"
//     console.log(this.username);
// }
// chai()

const myFunction = () => {
    const username = "John"
    console.log(this);
}
// myFunction()

// const addition =  (num1, num2) => {
//     return num1 + num2
// }

// console.log(addition(3,6))

// const addition =  (num1, num2) => num1 + num2
// console.log(addition(3,6))

const addition =  (num1, num2) => ({username: "John"})
console.log(addition(3,6))