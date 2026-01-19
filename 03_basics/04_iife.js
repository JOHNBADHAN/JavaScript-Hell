// Immediately Invoked Function Expressions

//Named iife
(function database (){
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED ${name}`);
})("JOHN") 