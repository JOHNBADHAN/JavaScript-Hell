// Objects Literals

const mySym = Symbol("Key")

const Jsuser = {
    [mySym]: "key",
    name: "John",
    "full name": "AllFather Odin",
    age: 20,
    location: "Asgard",
    email: "johnakaodin@vikings.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "odin@valhalla.com"
// Object.freeze(Jsuser)
Jsuser.email = "thor@valhalla.com"
// console.log(Jsuser);

// Greetings

Jsuser.greeting = function() {
    console.log("Hello Asgardians");
}
Jsuser.greeting2 = function() {
    console.log(`Hello Asgardians ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());