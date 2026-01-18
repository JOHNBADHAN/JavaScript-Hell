let a =400

if(true){
    let a = 300
    const b = 50
    // console.log(a);
    
}

// console.log(a);
// console.log(b);

function one(){
    const username = "Odin"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Odin"
    if (username === "Odin") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}