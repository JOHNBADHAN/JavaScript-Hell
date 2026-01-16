const marvel_heroes = ["IronMan", "SpiderMan", "Hulk"]
const dc_heroes = ["Batman", "Superman", "Aquaman"]

// marvel_heroes.push(dc_heroes)
const marv = marvel_heroes.concat(dc_heroes)
// console.log(marv);

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);

const random_array = [1, 2, 3, 4,[3, 5, 6, 8, [9, 10]]]

const ran_inOne = random_array.flat(Infinity)
console.log(ran_inOne);

console.log(Array.isArray("Accurate"));
console.log(Array.from("Accurate"));
console.log(Array.from({name: "hitesh"})) // interesting ...returns empty Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
