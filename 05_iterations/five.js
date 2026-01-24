const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) {
    // console.log(item);
})

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

function message(item) {
    // console.log(item);
}

coding.forEach(message)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item);
    // console.log(item.languageFileName);
})