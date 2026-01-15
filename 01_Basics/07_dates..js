let myDate = new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2026, 0 ,15)
// let myCreatedDate = new Date(2026, 0 ,15, 18, 1)

// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("1-15-2026")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

console.log(`Today the date is ${newDate.getDate()} and the day is ${newDate.getDay()}`);

newDate.toLocaleString('default', {
    weekday: "long"
})
