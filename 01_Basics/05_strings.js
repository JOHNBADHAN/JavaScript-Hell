const name = "John"
const repoCount = 20

console.log(`My name is ${name} and my repo count is ${repoCount}`)

const deathSlayer = new String('Sabertooth')

console.log(deathSlayer[4]);
console.log(deathSlayer.__prototype__);

console.log(deathSlayer.length);
console.log(deathSlayer.toLowerCase());
console.log(deathSlayer.toUpperCase());

console.log(deathSlayer.charAt(5));
console.log(deathSlayer.indexOf('r'));

const stringOne = deathSlayer.substring(0, 4)
console.log(stringOne)

const stringTwo = deathSlayer.slice(0, 6)
console.log(stringTwo)

const newstringone = "  john  "
console.log(newstringone)
console.log(newstringone.trim())

const url = "https://github.com/JOHN-BADHAN/Backend"

console.log(url.replace('-', ' '));
console.log(url.includes('JOHN'));
console.log(url.split('/'));