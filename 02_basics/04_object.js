const User = {}

User.id = "3456789"
User.name = "Max"
User.isLoggedIn = false

// console.log(User);

const regularUser = {
    email: "max@gmail.com",
    fullname: {
        username: {
            fisrtname: "Max",
            lastname: "Penn"
        }
    }
}

// console.log(regularUser.fullname.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 3: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const newuser =[
    {
        id: 1,
        name: "Max"
    },
    {
        id: 2,
        name: "Sam"
    },
    {
        id: 3,
        name: "Chris"
    },
]

// console.log(newuser);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(User.hasOwnProperty('isLoggedIn'));

// Object De-Structure

const course = {
    coursename: "Become A Cinephile",
    price: "999",
    courseInstructor: "John"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);